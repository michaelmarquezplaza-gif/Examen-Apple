# Examen-Apple

   Gestión de Productos – API RESTful (Tienda APPLE)

Examen Parcial

##              1. Descripción del Proyecto

El proyecto APPLE consiste en un sistema completo para la gestión de productos Apple mediante una API RESTful y un cliente web interactivo.
El sistema permite administrar el inventario de la tienda, incluyendo productos como iPhones, iPads, MacBooks, AirPods, Apple Watch, entre otros.

El backend usa Node.js, Express y MongoDB, mientras que el frontend está hecho con HTML, CSS (Bootstrap) y JavaScript para consumir la API mediante peticiones asíncronas.

##              2. Tecnologías Utilizadas
| Componente        | Tecnologías                                      |
| :---------------- | :----------------------------------------------- |
| **Backend**       | Node.js, Express.js, Mongoose, dotenv, cors      |
| **Base de Datos** | MongoDB Atlas                                    |
| **Frontend**      | HTML5, CSS3, JavaScript (Fetch API), Bootstrap 5 |

##                  3. Instalación y Ejecución del Backend (API APPLE)

El backend se encuentra en la carpeta:
/backend

Prerrequisitos

*   Node.js versión 18 o superior
*   npm
*   Cuenta configurada en MongoDB Atlas

#   Pasos de Configuración

## 1. Entrar al Backend
cd backend

## 2. Instalar Dependencias
npm install

## 3. Crear y Configurar .env

En la carpeta backend/, crear:
PORT=3000
MONGO_URI="mongodb+srv://michael:michael2025@cluster0.bd69zhl.mongodb.net/"

La base AppleStore puede contener una colección llamada products.

## 4. Levantar el Servidor
node server.js

Servidor corriendo en:
http://localhost:3000

##              4. Ejecución del Frontend

El frontend se encuentra en:
/frontend

#   Pasos

1)  Asegurarse de que el backend esté activo.
2)  Abrir la carpeta frontend/ en Visual Studio Code.
3)  Abrir index.html con Live Server.
4)  El cliente consumirá la API en:
http://localhost:3000/api/products

##              5. Endpoints de la API (Productos APPLE)

Todas las rutas están bajo:
/api/products

| Método HTTP | Ruta                | Descripción                               | Código de Éxito |
| :---------- | :------------------ | :---------------------------------------- | :-------------- |
| **GET**     | `/api/products`     | Obtener todos los productos Apple.        | 200 OK          |
| **GET**     | `/api/products/:id` | Obtener un producto por ID.               | 200 OK          |
| **POST**    | `/api/products`     | Registrar un nuevo producto.              | 201 Created     |
| **PUT**     | `/api/products/:id` | Actualizar la información de un producto. | 200 OK          |
| **DELETE**  | `/api/products/:id` | Eliminar un producto del inventario.      | 200 OK          |

Ejemplos de productos manejados

*   iPhone 15 Pro Max
*   MacBook Air M3
*   iPad Pro
*   Apple Watch Series 9
*   AirPods Pro 2

##              6. Funcionamiento del Sistema

1)  El usuario ingresa al frontend.
2)  La interfaz permite agregar, editar, borrar y listar productos.
3)  Cada acción hace una petición a la API REST usando fetch.
4)  La API consulta/actualiza la base MongoDB.
5)  El frontend se actualiza automáticamente sin recargar la página.

##              7. Estructura General del Proyecto APPLE
APPLE/
│── backend/
│   ├── models/
│   │   └── product.model.js
│   ├── routes/
│   │   └── product.routes.js
│   ├── controllers/
│   │   └── product.controller.js
│   ├── server.js
│   ├── .env
│   └── package.json
│
│── frontend/
│   ├── index.html
│   ├── app.js
│   ├── style.css
│   └── assets/
└── README.md



##              8. Autor

Nombre: MARQUEZ PLAZA MICHAEL GEAMPIERRE

Curso: PROGRAMACION V

Intitucion: Universidad Tecnica "Luis Vargas Torres"
