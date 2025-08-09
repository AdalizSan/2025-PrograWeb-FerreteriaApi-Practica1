import { orders } from "../mock-data/orders.data.js";

const getAll = () => orders;

const getById = (id) => orders.find((o) => o.id === id);

const create = (data) => {
    const newId = orders.length ? orders[orders.length - 1].id + 1 : 1;
    const newOrder = { id: newId, ...data };
    orders.push(newOrder);
    return newOrder;
};

const update = (id, data) => {
    const index = orders.findIndex((o) => o.id === id);
    if (index === -1) return null;
    orders[index] = { ...orders[index], ...data };
    return orders[index];
};

const deleteById = (id) => {
    const index = orders.findIndex((o) => o.id === id);
    if (index === -1) return false;
    orders.splice(index, 1);
    return true;
};
export {
    getAll,
    getById,
    create,
    update,
    deleteById
};
