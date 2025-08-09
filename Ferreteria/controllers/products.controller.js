import * as productService from "../services/products.service.js";

const getProducts = (req, res) => {
    try {
    const data = productService.getAll();
    res.status(200).json({ message: "Success", data });
    } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
    }
};

const getProductById = (req, res) => {
    try {
    const id = Number(req.params.id);
    const product = productService.getById(id);
    if (!product)
        return res.status(404).json({ message: "Producto no encontrado" });
    res.status(200).json({ message: "Success", data: product });
    } catch {
    res.status(500).json({ message: "Error interno del servidor" });
    }
};

const createProduct = (req, res) => {
    try {
    const newProduct = productService.create(req.body);
    res.status(201).json({ message: "Producto creado", data: newProduct });
    } catch {
    res.status(500).json({ message: "Error interno del servidor" });
    }
};

const updateProduct = (req, res) => {
    try {
    const id = Number(req.params.id);
    const updated = productService.update(id, req.body);
    if (!updated)
        return res.status(404).json({ message: "Producto no encontrado" });
    res.status(200).json({ message: "Producto actualizado", data: updated });
    } catch {
    res.status(500).json({ message: "Error interno del servidor" });
    }
};

const deleteProduct = (req, res) => {
    try {
    const id = Number(req.params.id);
    const deleted = productService.deleteById(id);
    if (!deleted)
        return res.status(404).json({ message: "Producto no encontrado" });
    res.status(200).json({ message: "Producto eliminado" });
    } catch {
    res.status(500).json({ message: "Error interno del servidor" });
}
};
export {
    getProductById,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
};