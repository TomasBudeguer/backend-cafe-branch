import mongoose, { Schema } from "mongoose";
const registroSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
  },
  apellido: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 1,
  },
  contrasenia: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 16,
  },
});

const Registro = mongoose.model("registro", registroSchema);

export default Registro;
