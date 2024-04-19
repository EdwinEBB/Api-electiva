import express from "express";
import cors from "cors"
//importación de base de datos y rutas
import electivabd from "./database/db.js";
import rutas from "./routers/user.routes.js";


const app=express();


app.use(cors())
app.use(express.json())
app.use('/user',rutas)


app.get("/user",(req,res)=>{
    res.send("HOLA ESTA ES LA APP DE REGISTRO DE USUARIOS Y EDAD")
})

try {
    await electivabd.authenticate()
    console.log("Conexion listas")
} catch (error) {
    console.log(`El error es ${error}`)
}


app.listen(8000,()=>{
    console.log("servidor iniciado en el puerto 8000")
})