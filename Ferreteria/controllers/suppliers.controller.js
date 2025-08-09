import * as supplierService from "../services/suppliers.service.js";

const getSuppliers = (req, res) => {
    try {
    const data = supplierService.getAll();
    res.status(200).json({ message: "Success", data });
    } catch {
    res.status(500).json({ message: "Error interno del servidor" });
    }
};

const getSupplierById = (req, res) => {
    try {
    const id = Number(req.params.id);
    const supplier = supplierService.getById(id);
    if (!supplier)
        return res.status(404).json({ message: "Proveedor no encontrado" });
    res.status(200).json({ message: "Success", data: supplier });
    } catch {
    res.status(500).json({ message: "Error interno del servidor" });
    }
};

const createSupplier = (req, res) => {
    try {
    const newSupplier = supplierService.create(req.body);
    res.status(201).json({ message: "Proveedor creado", data: newSupplier });
    } catch {
    res.status(500).json({ message: "Error interno del servidor" });
    }
};

const updateSupplier = (req, res) => {
    try {
    const id = Number(req.params.id);
    const updated = supplierService.update(id, req.body);
    if (!updated)
        return res.status(404).json({ message: "Proveedor no encontrado" });
    res.status(200).json({ message: "Proveedor actualizado", data: updated });
    } catch {
    res.status(500).json({ message: "Error interno del servidor" });
    }
};

const deleteSupplier = (req, res) => {
    try {
    const id = Number(req.params.id);
    const deleted = supplierService.deleteById(id);
    if (!deleted)
        return res.status(404).json({ message: "Proveedor no encontrado" });
    res.status(200).json({ message: "Proveedor eliminado" });
    } catch {
    res.status(500).json({ message: "Error interno del servidor" });
}
};
export{
    getSupplierById,
    getSuppliers,
    createSupplier,
    updateSupplier,
    deleteSupplier
};