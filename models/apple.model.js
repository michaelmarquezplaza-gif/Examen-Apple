import mongoose from "mongoose";

const appleSchema = new mongoose.Schema({
    producto: {
        type: String,
        required: [true, "El nombre del producto es obligatorio"]
    },
    precio: {
        type: Number,
        required: [true, "El precio es obligatorio"]
    },
    stock: {
        type: Number,
        default: 0
    },
    imagen: {
        type: String,
        required: [true, "La URL de la imagen es obligatoria"]
    }
}, { timestamps: true });

export default mongoose.model("Apple", appleSchema);
