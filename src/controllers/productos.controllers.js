import { validationResult } from "express-validator";
import Producto from "../models/producto";

export const listarProductos = async (req, res) => {
  try {
    // buscar todos los productos en la BD
    const listaProductos = await Producto.find();
    // responder al usuario que todo salio bien
    res.status(200).json(listaProductos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar buscar los producto",
    });
  }
};

export const crearProducto = async (req, res) => {
  try {
    // manejar los errores de express validator
    const errores = validationResult(req);
    // errores.isEmpty() retorna true cuando no hay errores y retorna false cuando hay errores
    // PREGUNTO SI HAY ERRORES asi:
    if (!errores.isEmpty()) {
      return res.status(400).json({
        errores: errores.array(),
      });
    }

    // extraer del body los datos
    console.log(req.body);
    // agregar la validacion correspondiente

    // creamos un nuevo producto
    const productoNuevo = new Producto(req.body);
    // guardar ese producto en la BD
    await productoNuevo.save();
    // responder al usuario que todo salio bien
    res.status(201).json({
      mensaje: "El producto fue correctamente creado",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al intentar agregar un producto",
    });
  }
};

export const obtenerProducto = async (req, res) => {
  try {
    // obtener el parametro
    console.log(req.params.id);
    // pedirle a la BD buscar el documento que coincide con el id del parametro
    const productoBuscado = await Producto.findById(req.params.id);
    // responder con el producto encontrado
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error no se pudo encontrar el producto solicitado",
    });
  }
};

export const editarProducto = async (req, res) => {
  try {
    // buscar el pproducto por el id, luego modificar los datos con el body
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({
        errores: errores.array(),
      });
    }
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    // responder al frontend
    res.status(200).json({
      mensaje: "El producto fue editado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error el producto solicitado no pudo ser modificado",
    });
  }
};

export const borrarProducto = async (req, res) => {
  try {
    // buscar un producto por el id y borrar
    await Producto.findByIdAndDelete(req.params.id);
    // responder al frontend si pude eliminar el producto
    res.status(200).json({
      mensaje: "El producto fue correctamente eliminado",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error el producto solicitado no pudo ser eliminado",
    });
  }
};

export const probar = async (req, res) => {
  try {
    const filtro = {};
    const actualizacion = { $set: { precio: 44 } };
    // buscar todos los productos en la BD
    // const listaProductos = await Producto.find();
    Producto.updateMany(filtro, actualizacion);
    // responder al usuario que todo salio bien
    res
      .status(200)
      .json(
        { mensaje: "Los precios se actualizaron correctamente" }
      );
  } catch (error) {
    console.log(error);
    res.status(404).json({ mensaje: "Error al actualizar los precios error" });
  }
};
