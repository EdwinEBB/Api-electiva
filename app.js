import express from "express";
import cors from "cors"


const app=express();


app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("HOLA ESTA ES LA APP DE REGISTRO DE USUARIOS Y EDAD")
})



app.listen(8000,()=>{
    console.log("servidor iniciado en el puerto 8000")
})