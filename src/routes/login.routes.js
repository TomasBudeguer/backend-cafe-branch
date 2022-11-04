import { Router } from "express";
import { check } from "express-validator";
import {
  iniciarSesion,
  usuariosLogueados,
} from "../controllers/login.controllers";

const router = Router();

router
  .route("/login")
  .get(usuariosLogueados)
  .post(
    [
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
    iniciarSesion
  );

export default router;
