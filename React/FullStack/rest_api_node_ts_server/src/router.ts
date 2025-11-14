import {Router} from "express"

const router = Router() // Accedemos a todas las funciones del router de express


router.get('/', (req, res)=>{ // Siempre se pasan los parametros request (lo que enviamos a la pagina) (req) y response (respuestas de la pagina) (res)
    // res tiene metodos como 
    // send: envia datos a la pantalla
    // json: eviamos datos json
    res.send("Hola mundo desde GET")
}) 

router.post('/', (req,res)=>{
    console.log("Desde POST ")  
})

router.put('/', (req,res)=>{
    console.log("Desde PUT ")  
})

router.patch('/', (req,res)=>{
    console.log("Desde PATCH ")  
})

router.delete('/', (req,res)=>{
    console.log("Desde DELETE ")  
})

export default router