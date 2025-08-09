import {Router} from "express";
import productsRoutes from "./products.route.js";
import customersRoutes from "./customers.route.js";
import suppliersRoutes from "./suppliers.route.js";
import ordersRoutes from "./orders.route.js";

const router = Router();

router.use("/products", productsRoutes);
router.use("/customers", customersRoutes);
router.use("/suppliers", suppliersRoutes);
router.use("/orders", ordersRoutes);

export default router;
