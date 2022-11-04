import mongoose, { Schema } from "mongoose";
const loginSchema = new Schema({
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

const Login = mongoose.model("login", loginSchema);
export default Login;
