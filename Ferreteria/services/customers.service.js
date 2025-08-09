import { customers } from "../mock-data/customers.data.js";

const getAll = () => customers;

const getById = (id) => customers.find((c) => c.id === id);

const create = (data) => {
    const newId = customers.length ? customers[customers.length - 1].id + 1 : 1;
    const newCustomer = { id: newId, ...data };
    customers.push(newCustomer);
    return newCustomer;
};

const update = (id, data) => {
    const index = customers.findIndex((c) => c.id === id);
    if (index === -1) return null;
    customers[index] = { ...customers[index], ...data };
    return customers[index];
};

const deleteById = (id) => {
    const index = customers.findIndex((c) => c.id === id);
    if (index === -1) return false;
    customers.splice(index, 1);
    return true;
};
export{
    getAll,
    getById,
    create,
    update,
    deleteById
};
