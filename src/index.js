import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from 'path'
import './database'

// crear una instancia de express
const app = express();

// creamos una variable
app.set("port", process.env.PORT || 4000);

// usar el puerto
app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto " + app.get("port"));
});

// middlewares: funciones que se ejecutan antes de las rutas
// da informacion extra en la terminal
app.use(morgan("dev"));
// permitir peticiones remotas
app.use(cors());
// middlewares para interpretar los objetos json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//cargar un archivo estatico
app.use(express.static(path.join(__dirname,'../public')))



// rutas: nombre de dominio + -----
// http://localhost:4000/
app.get("/productos", (req, res) => {
  res.send("aqui tengo que retornar un arreglo de productos");
});
app.post("/productos", (req, res) => {
  res.send("esto es una prueba de peticion post");
});
app.get("/productos2", (req, res) => {
  res.send("aqui devolvemos un producto");
});
