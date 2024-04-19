import express from "express";


const rutas=express.Router();

rutas.get('/obtenertodo');
rutas.get('/getall:id');
rutas.post('/registrar');
rutas.put('/actualizar:id');
rutas.delete('/borras:id');

export default rutas;