import * as orderService from "../services/orders.service.js";

const getOrders = (req, res) => {
    try {
    const data = orderService.getAll();
    res.status(200).json({ message: "Success", data });
    } catch {
    res.status(500).json({ message: "Error interno del servidor" });
        }
};

const getOrderById = (req, res) => {
    try {
        const id = Number(req.params.id);
        const order = orderService.getById(id);
        if (!order)
        return res.status(404).json({ message: "Orden no encontrada" });
        res.status(200).json({ message: "Success", data: order });
    } catch {
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

const createOrder = (req, res) => {
    try {
    const newOrder = orderService.create(req.body);
    res.status(201).json({ message: "Orden creada", data: newOrder });
    } catch {
    res.status(500).json({ message: "Error interno del servidor" });
    }
};

const updateOrder = (req, res) => {
    try {
    const id = Number(req.params.id);
    const updated = orderService.update(id, req.body);
    if (!updated)
        return res.status(404).json({ message: "Orden no encontrada" });
    res.status(200).json({ message: "Orden actualizada", data: updated });
    } catch {
    res.status(500).json({ message: "Error interno del servidor" });
    }
};

const deleteOrder = (req, res) => {
    try {
    const id = Number(req.params.id);
    const deleted = orderService.deleteById(id);
    if (!deleted)
        return res.status(404).json({ message: "Orden no encontrada" });
    res.status(200).json({ message: "Orden eliminada" });
    } catch {
    res.status(500).json({ message: "Error interno del servidor"});
}
};
export {
    getOrderById,
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder
};