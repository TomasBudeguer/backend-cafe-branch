import Login from "../models/login";
import { validationResult } from "express-validator";

export const usuariosLogueados = async (req, res) => {
  try {
    const listarUsuarios = await Login.find();
    res.status(200).json(listarUsuarios);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar buscar los usuarios logueados",
    });
  }
};

export const iniciarSesion = async (req, res) => {
  try {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({
        errores: errores.array(),
      });
    }
    const usuarioLogueado = new Login(req.body);
    await usuarioLogueado.save();
    res.status(201).json({
      mensaje: "El usuario inicio sesion correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al iniciar sesion",
    });
  }
};
