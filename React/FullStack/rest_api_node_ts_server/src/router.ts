import {Router} from "express"
import {createProduct, getProduct, getProductById, updateAvailableProduct, updateProduct} from "./Handlers/products"; // Importamos la funcion del metodo POST
import {handleInputError, validation, validationById} from "./middleware";

const router = Router() // Accedemos a todas las funciones del router de express


router.get('/',
    getProduct,
    )

router.get('/:id', // Routing dinamico, a traves de la URL se le pasa el campo id
    validationById,
    handleInputError,
    getProductById
)

router.post('/',
    validation, // middleware para las validaciones
    handleInputError, // middle para mostrar los errores
    createProduct
) // createProduct va a ser de metodo POST

router.put('/:id',
    validationById,
    validation, // Validaciones para la acutualizacion del producto
    handleInputError,
    updateProduct
)

router.patch('/:id',
    validationById,
    handleInputError,
    updateAvailableProduct
)

// La diferencia entre PUT Y PATCH, PUT: remplaza/actualizar completamente un recurso, PATCH modificar unicamente el valor que indicas


router.delete('/', (req,res)=>{
    console.log("Desde DELETE ")  
})

export default router