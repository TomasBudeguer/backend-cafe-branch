import Producto from "../models/producto";

export const listarProductos = (req, res) => {
  res.send("aqui tengo que retornar un arreglo de productos");
};

export const crearProducto = async (req, res) => {
  try {
    // extraer del body los datos
    console.log(req.body);
    // agregar la validacion correspondiente

    // creamos un nuevo producto
    const productoNuevo = new Producto(req.body);
    // guardar ese producto en la BD
    await productoNuevo.save();
    // responder al usuario que todo salio bien
    res.status(201).json({
        mensaje: "El producto fue correctamente creado"
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({
        mensaje: "Error al intentar agregar un producto"
    })
  }
};
