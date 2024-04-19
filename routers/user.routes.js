import express from "express";
import { getallUser,getuser,createUser,updateUser,deleteUser } from "../controllers/user.controller.js";

const rutas=express.Router();
//Rutas de obeter usuarios
rutas.get('/getall',getallUser);
rutas.get('/getuser/:id',getuser);
//ruta de crear usuario
rutas.post('/register',createUser);
//ruta de editar usuario
rutas.put('/updateuser/:id',updateUser);
//ruta de elminar usuario
rutas.delete('/deleteuser/:id',deleteUser);

export default rutas;