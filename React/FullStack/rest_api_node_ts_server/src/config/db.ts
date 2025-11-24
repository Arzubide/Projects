import dotenv from 'dotenv' // Instalamos esta dependencia para ocultar la url de la base de datos 
import {Sequelize} from "sequelize-typescript"
import Product from '../Models/Product.model'

dotenv.config() // accedemos a todas las configuraciones


export const dataBase = new Sequelize(process.env.DATA_BASE_EXTERNAL!, {
  dialect: 'postgres', // expresamos que bd es 
  models : [__dirname + '/../Models/**/*.ts'] // Todos los archivos ts en models se consideraran modelos
})// accedemos a la variable que creamos en env 
 // process.env.DATA_BASE_EXTERNAL!


