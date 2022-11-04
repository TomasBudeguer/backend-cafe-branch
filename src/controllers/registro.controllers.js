import Registro from "../models/registro";

export const listarUsuarios = async (req, res) => {
  try {
    const listarUsuarios = await Registro.find();
    res.status(200).json(listarUsuarios);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar listar los usuarios",
    });
  }
};

export const crearUsuario = async (req, res) => {
    try {
      const nuevoUsuario = new Registro(req.body);
      await nuevoUsuario.save();
      res.status(201).json({
        mensaje: "El usuario fue correctamente creado",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        mensaje: "Error al intentar agregar un usuario",
      });
    }
  };
