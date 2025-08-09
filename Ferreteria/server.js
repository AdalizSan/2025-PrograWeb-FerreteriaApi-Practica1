import express from "express";
import indexRoutes from "./routes/index.route.js";

const app = express();
const port = 3000;
app.use(express.json());

app.use("/",indexRoutes);

app.listen(port, () => console.log('Servidor iniciado'));