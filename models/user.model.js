import electivabd from "../database/db.js";
import { DataTypes } from "sequelize";

const Usermodel=electivabd.define('personas',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    edad:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    mayor_de_edad:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }
})

export default Usermodel;