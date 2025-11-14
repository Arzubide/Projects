import express from "express"

const servidor = express() // Creamos el servidor
// Dentro del servidor existen distintas peticiones, get, post, delete, put, patch

//Routing
servidor.get('/', (req, res)=>{ // Siempre se pasan los parametros request (lo que enviamos a la pagina) (req) y response (respuestas de la pagina) (res)
    // res tiene metodos como 
    // send: envia datos a la pantalla
    // json: eviamos datos json
    res.send("Hola mundo desde GET")
}) 

// servidor.post('/', (req,res)=>{
//     console.log("Desde POST ")  
// })

// servidor.put('/', (req,res)=>{
//     console.log("Desde PUT ")  
// })

// servidor.patch('/', (req,res)=>{
//     console.log("Desde PATCH ")  
// })

// servidor.delete('/', (req,res)=>{
//     console.log("Desde DELETE ")  
// })


export default servidor 