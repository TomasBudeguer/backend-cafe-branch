import { Router } from "express";
import {
  listarProductos,
  crearProducto,
  obtenerProducto,
  editarProducto,
} from "../controllers/productos.controllers";
const router = Router();

router.route("/productos").get(listarProductos).post(crearProducto);

router.route("/productos/:id")
.get(obtenerProducto)
.put(editarProducto)
// .delete()

export default router;

// app.get("/productos", (req, res) => {
//   res.send("aqui tengo que retornar un arreglo de productos");
// });
// app.post("/productos", (req, res) => {
//   res.send("esto es una prueba de peticion post");
// });
// app.get("/productos2", (req, res) => {
//   res.send("aqui devolvemos un producto");
// });
