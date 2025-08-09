import * as customerService from "../services/customers.service.js";

const getCustomers = (req, res) => {
    try {
    const data = customerService.getAll();
    res.status(200).json({ message: "Success", data });
    } catch {
    res.status(500).json({ message: "Error interno del servidor" });
    }
};

const getCustomerById = (req, res) => {
    try {
    const id = Number(req.params.id);
    const customer = customerService.getById(id);
    if (!customer)
        return res.status(404).json({ message: "Cliente no encontrado" });
    res.status(200).json({ message: "Success", data: customer });
    } catch {
    res.status(500).json({ message: "Error interno del servidor" });
    }
};

const createCustomer = (req, res) => {
    try {
    const newCustomer = customerService.create(req.body);
    res.status(201).json({ message: "Cliente creado", data: newCustomer });
    } catch {
    res.status(500).json({ message: "Error interno del servidor" });
    }
};

const updateCustomer = (req, res) => {
    try {
    const id = Number(req.params.id);
    const updated = customerService.update(id, req.body);
    if (!updated)
        return res.status(404).json({ message: "Cliente no encontrado" });
    res.status(200).json({ message: "Cliente actualizado", data: updated });
    } catch {
    res.status(500).json({ message: "Error interno del servidor" });
    }
};

const deleteCustomer = (req, res) => {
    try {
    const id = Number(req.params.id);
    const deleted = customerService.deleteById(id);
    if (!deleted)
        return res.status(404).json({ message: "Cliente no encontrado" });
    res.status(200).json({ message: "Cliente eliminado" });
    } catch {
    res.status(500).json({ message: "Error interno del servidor" });
}
};
export{ 
    getCustomerById,
    getCustomers,
    createCustomer,
    updateCustomer,
    deleteCustomer
};