//se importa sequelize para la conexion
import { Sequelize } from "sequelize";

//se estable la conexion con la base de datos y se exporta
const electivadb=new Sequelize('electivabd','root','',{
    host:'localhost',
    dialect:'mysql'
})

export default electivadb;