import Usermodel from "../models/user.model.js"
//metodos para las funciones del crud




//mostrar todos los registros
export const getallUser= async(req,res)=>{
    try {
        //extracción de datos y muestreo
        const Users= await Usermodel.findAll();
        res.json(Users)
    } catch (error) {
        res.json({message:error.message})
    }
}

//mostrar un solo registro
export const getuser= async(req,res)=>{
    try {
        //extracción de datos y muestreo
        const User=await Usermodel.findAll({
            where:{
                id:req.params.id
            }
        })
        if (!User){
           res.json({message:"Usuario no encontrado"})
        }else{
            res.json(User)
        }
        
    } catch (error) {
        res.json({message:error.message})
    }
}

//Crear un nuevo usuario
export const createUser=async(req,res)=>{
    try {
        //extracción de datos y registro
        const {id,nombre,edad}=req.body;
        const MayorEdad= edad>=18;

        await Usermodel.create({
            id,
            nombre,
            edad,
            mayor_de_edad:MayorEdad
        })

        res.json({message:"Usuario registrado"})
    } catch (error) {
        res.json({message:error.message})
    }
}


export const updateUser=async(req,res)=>{
    //extracción del id y busqueda de usuario
    const iduser=req.params.id
    const findUser= await Usermodel.findByPk(iduser);
    if (!findUser){
        return res.status(404).json({error:'Usuario no encontrado'})
    }
    //extracción de datos nuevos
    const {nombre,edad}=req.body;
    const mayoredad=edad>=18
    //actualización de datos y respuesta
    try {
        await findUser.update({
            nombre,
            edad,
            mayor_de_edad:mayoredad
        });
        res.json({
            "message":"Usuario actualizado satisfactoriamente"
        })
    } catch (error) {
        res.json({error:"Error interno en el servidor"})
    }
}

export const deleteUser=async(req,res)=>{
    try {
        //extracción del id y busqueda de usuario
        const iduser=req.params.id
        const findUser= await Usermodel.findByPk(iduser);
        if (!findUser){
            return res.status(404).json({error:'Usuario no encontrado'})
        }
        //eliminación de usuario
        await findUser.destroy();
        res.json({message:"Usuario eliminado correctamente"})
    } catch (error) {
        
    }
}
