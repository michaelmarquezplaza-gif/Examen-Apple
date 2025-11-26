const API = "http://localhost:3000/api/apple"; // Cambia al endpoint real de tu API

document.addEventListener("DOMContentLoaded", () => {
    cargarProductos();
});

// -------------------- CARGAR PRODUCTOS --------------------
let productosGlobal = []; // Guardamos todos los productos para filtros
async function cargarProductos() {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    try {
        const res = await fetch(API);
        const data = await res.json();

        if (!data.productos || data.productos.length === 0) {
            contenedor.innerHTML = "<p>No hay productos disponibles.</p>";
            return;
        }

        productosGlobal = data.productos; // Guardamos los productos

        mostrarProductos(productosGlobal);

    } catch (error) {
        contenedor.innerHTML = "<p>Error al cargar productos.</p>";
        console.error(error);
    }
}

// -------------------- MOSTRAR PRODUCTOS --------------------
function mostrarProductos(productos) {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    productos.forEach(p => {
        contenedor.innerHTML += `
            <div class="card">
                <img src="${p.imagen}" alt="Imagen">
                <h3>${p.producto}</h3>
                <p><strong>Precio:</strong> $${p.precio}</p>
                <p><strong>Stock:</strong> ${p.stock}</p>

                <div class="card-buttons">
                    <button class="btn-editar" onclick="abrirModal(
                        '${p._id}', '${p.producto}', ${p.precio}, ${p.stock}, '${p.imagen}'
                    )">Editar</button>

                    <button class="btn-eliminar" onclick="eliminarProducto('${p._id}')">
                        Eliminar
                    </button>
                </div>
            </div>
        `;
    });
}

// -------------------- AGREGAR PRODUCTO --------------------
document.getElementById("formApple").addEventListener("submit", async e => {
    e.preventDefault();

    const nuevo = {
        producto: document.getElementById("producto").value,
        precio: Number(document.getElementById("precio").value),
        stock: Number(document.getElementById("stock").value),
        imagen: document.getElementById("imagen").value
    };

    try {
        await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nuevo)
        });

        e.target.reset();
        cargarProductos();

    } catch (error) {
        console.error("Error al agregar producto:", error);
    }
});

// -------------------- EDITAR PRODUCTO --------------------
let editID = "";
function abrirModal(id, producto, precio, stock, imagen) {
    document.getElementById("modal").style.display = "flex";
    editID = id;

    document.getElementById("edit-producto").value = producto;
    document.getElementById("edit-precio").value = precio;
    document.getElementById("edit-stock").value = stock;
    document.getElementById("edit-imagen").value = imagen;
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

document.getElementById("formEditar").addEventListener("submit", async e => {
    e.preventDefault();

    const actualizado = {
        producto: document.getElementById("edit-producto").value,
        precio: Number(document.getElementById("edit-precio").value),
        stock: Number(document.getElementById("edit-stock").value),
        imagen: document.getElementById("edit-imagen").value
    };

    try {
        await fetch(`${API}/${editID}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(actualizado)
        });

        cerrarModal();
        cargarProductos();

    } catch (error) {
        console.error("Error al actualizar producto:", error);
    }
});

// -------------------- ELIMINAR PRODUCTO --------------------
async function eliminarProducto(id) {
    if (!confirm("¿Eliminar producto definitivamente?")) return;

    try {
        await fetch(`${API}/${id}`, { method: "DELETE" });
        cargarProductos();
    } catch (error) {
        console.error("Error al eliminar producto:", error);
    }
}

// -------------------- BÚSQUEDA EN TIEMPO REAL --------------------
document.getElementById("buscarProducto").addEventListener("input", e => {
    const texto = e.target.value.toLowerCase();
    const filtrados = productosGlobal.filter(p => p.producto.toLowerCase().includes(texto));
    mostrarProductos(filtrados);
});

// -------------------- FILTROS --------------------
document.getElementById("aplicarFiltros").addEventListener("click", () => {
    const precioMax = Number(document.getElementById("filtroPrecio").value);
    const stockMin = Number(document.getElementById("filtroStock").value);

    let filtrados = [...productosGlobal];

    if (!isNaN(precioMax) && precioMax > 0) {
        filtrados = filtrados.filter(p => p.precio <= precioMax);
    }
    if (!isNaN(stockMin) && stockMin > 0) {
        filtrados = filtrados.filter(p => p.stock >= stockMin);
    }

    mostrarProductos(filtrados);
});

// -------------------- RESET FILTROS --------------------
document.getElementById("resetFiltros").addEventListener("click", () => {
    document.getElementById("filtroPrecio").value = "";
    document.getElementById("filtroStock").value = "";
    document.getElementById("buscarProducto").value = "";
    mostrarProductos(productosGlobal);
});
