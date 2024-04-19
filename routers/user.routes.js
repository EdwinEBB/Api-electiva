import express from "express";


const rutas=express.Router();

rutas.get('/getadd');
rutas.get('/getall:id');
rutas.post('/registrar');
rutas.put('/actualizar:id');
rutas.delete('/borras:id');

export default rutas;