import { suppliers } from "../mock-data/suppliers.data.js";

const getAll = () => suppliers;

const getById = (id) => suppliers.find((s) => s.id === id);

const create = (data) => {
    const newId = suppliers.length ? suppliers[suppliers.length - 1].id + 1 : 1;
    const newSupplier = { id: newId, ...data };
    suppliers.push(newSupplier);
    return newSupplier;
};

const update = (id, data) => {
    const index = suppliers.findIndex((s) => s.id === id);
    if (index === -1) return null;
    suppliers[index] = { ...suppliers[index], ...data };
    return suppliers[index];
};

const deleteById = (id) => {
    const index = suppliers.findIndex((s) => s.id === id);
    if (index === -1) return false;
    suppliers.splice(index, 1);
    return true;
};
export {
    getAll,
    getById,
    create,
    update,
    deleteById
};