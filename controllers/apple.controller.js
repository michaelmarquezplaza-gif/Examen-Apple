import Apple from '../models/apple.model.js';
import mongoose from 'mongoose';
import express from 'express';

export const getAllApple = async (req, res) => {
    console.log('🍏 Obtener todos los productos Apple');
    try {
        const productos = await Apple.find({}, { __v: 0 });
        if (productos.length === 0) {
            return res.status(404).json({ msg: 'No se encontraron productos Apple' });
        }
        return res.status(200).json({ productos });
    } catch (error) {
        return res.status(500).json({ msg: 'Error al obtener los productos Apple' });
    }
};

export const getAppleById = async (req, res) => {
    console.log('📱 Obtener producto Apple por ID');
    const id = req.params.id;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: 'ID no válido' });
        }

        const producto = await Apple.findById(id);
        if (!producto) {
            return res.status(404).json({ msg: 'Producto Apple no encontrado' });
        }

        return res.status(200).json({ producto });
    } catch (error) {
        return res.status(500).json({ msg: 'Error al obtener el producto Apple' });
    }
};

export const postApple = async (req, res) => {
    console.log('🎯 Agregar nuevo producto Apple');
    const body = req.body;
    const nuevoProducto = new Apple(body);

    try {
        const validationError = nuevoProducto.validateSync();
        if (validationError) {
            const errorMessages = Object.values(validationError.errors).map(
                (error) => error.message
            );
            return res.status(400).json({ errores: errorMessages });
        }

        await nuevoProducto.save();
        return res.status(201).json({
            msg: 'Producto Apple agregado exitosamente',
            producto: nuevoProducto
        });
    } catch (error) {
        return res.status(500).json({ msg: 'Error al guardar el producto Apple' });
    }
};

export const putApple = async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: 'ID no válido' });
        }

        const producto = await Apple.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
        });

        if (!producto) {
            return res.status(404).json({ msg: 'Producto Apple no encontrado' });
        }

        return res.status(200).json({
            msg: 'Producto Apple actualizado correctamente',
            producto
        });
    } catch (error) {
        return res.status(500).json({ msg: 'Error al actualizar el producto Apple' });
    }
};

export const deleteApple = async (req, res) => {
    console.log('🗑️ Eliminar producto Apple');
    const id = req.params.id;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: 'ID no válido' });
        }

        const producto = await Apple.findByIdAndDelete(id);

        if (!producto) {
            return res.status(404).json({ msg: 'Producto Apple no encontrado' });
        }

        return res.status(200).json({
            msg: 'Producto Apple eliminado correctamente',
            producto
        });
    } catch (error) {
        return res.status(500).json({ msg: 'Error al eliminar el producto Apple' });
    }
};
