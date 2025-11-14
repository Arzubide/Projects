import express from "express"
import router from "./router"

const servidor = express() // Creamos el servidor
// Dentro del servidor existen distintas peticiones, get, post, delete, put, patch (router.ts)

//Routing - Conectamos el router a un prefijo de URL
servidor.use('/', router) // Use es una función que se ejecuta entre que llega una petición HTTP y se envía la respuesta.



export default servidor 