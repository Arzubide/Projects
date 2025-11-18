import dotenv from 'dotenv' // Instalamos esta dependencia para ocultar la url de la base de datos 
import {Sequelize} from "sequelize"
// const { Sequelize } = require('sequelize');
dotenv.config() // accedemos a todas las configuraciones


export const dataBase = new Sequelize(process.env.DATA_BASE_EXTERNAL!, {
  dialect: 'postgres' // expresamos que bd es 
})// accedemos a la variable que creamos en env 
 // process.env.DATA_BASE_EXTERNAL!


