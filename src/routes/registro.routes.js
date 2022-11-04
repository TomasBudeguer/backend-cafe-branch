import { Router } from "express";
import { check } from "express-validator";
import {
  crearUsuario,
  listarUsuarios,
} from "../controllers/registro.controllers";

const router = Router();

router
  .route("/registro")
  .get(listarUsuarios)
  .post(
    [
      check("nombre")
        .notEmpty()
        .withMessage("El nombre es un campo obligatorio")
        .isLength({ min: 1, max: 20 })
        .withMessage("El email debe contener entre 2 y 20 caracteres"),
      check("apellido")
        .notEmpty()
        .withMessage("El apellido es un campo obligatorio")
        .isLength({ min: 1, max: 20 })
        .withMessage("El apellido debe contener entre 2 y 20 caracteres"),
      check("email")
        .notEmpty()
        .withMessage("El email es un campo obligatorio")
        .isLength({ min: 1 })
        .withMessage("El email debe contener como minimo 1 caracter")
        .matches(
          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        )
        .withMessage("Debe enviar un email valido"),
      check("contrasenia")
        .notEmpty()
        .withMessage("La contraseña es un campo obligatorio")
        .isLength({ min: 8, max: 16 })
        .withMessage("La contraseña debe contener entre 8 y 16 caracteres")
        .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
        .withMessage(
          "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula"
        ),
    ],
    crearUsuario
  );

export default router;
