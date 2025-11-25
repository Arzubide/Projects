import {Router} from "express"
import {createProduct, getProduct} from "./Handlers/products"; // Importamos la funcion del metodo POST
import {handleInputError, validation} from "./middleware";

const router = Router() // Accedemos a todas las funciones del router de express


router.get('/',
    getProduct,
    )

router.post('/',
    validation, // middleware para las validaciones
    handleInputError, // middle para mostrar los errores
    createProduct ) // createProduct va a ser de metodo POST

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