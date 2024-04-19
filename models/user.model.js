import electivadb from "../db/db.js";
import { DataTypes } from "sequelize";

const Usermodel=electivadb.define('personas',{
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