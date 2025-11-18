import express from "express"
import router from "./router"
import { dataBase } from "./config/db"

//Conexion con ORM de la base de datos
async function conectDB() {
    try{
        await dataBase.authenticate() // Nos autenticamos con la base de datos
        dataBase.sync() // Se estaran sincronizando los cambios 
        console.log('Connection has been established successfully.');
    } catch(e){
        console.log(e)
    }
}

conectDB()

const servidor = express() // Creamos el servidor
// Dentro del servidor existen distintas peticiones, get, post, delete, put, patch (router.ts)

//Routing - Conectamos el router a un prefijo de URL
servidor.use('/api/products', router) // Use es una función que se ejecuta entre que llega una petición HTTP y se envía la respuesta.
// al momento de nosotros definir esa direccion, le definimos todas las direcciones de lo que tenga router


export default servidor