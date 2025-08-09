import { products } from "../mock-data/products.data.js";

const getAll = () => products;

const getById = (id) => products.find((p) => p.id === id);

const create = (data) => {
    const newId = products.length ? products[products.length - 1].id + 1 : 1;
    const newProduct = { id: newId, ...data };
    products.push(newProduct);
    return newProduct;
};

const update = (id, data) => {
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) return null;
    products[index] = { ...products[index], ...data };
    return products[index];
};

const deleteById = (id) => {
    const index = products.findIndex((p) => p.id === id);
    if (index === -1) return false;
    products.splice(index, 1);
    return true;
};
export{
    getAll,
    getById,
    create,
    update,
    deleteById
};