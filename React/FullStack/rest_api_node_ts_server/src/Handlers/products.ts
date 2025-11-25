import {Request,Response} from "express"
import Product from "../Models/Product.model";
import {check, validationResult} from "express-validator" // Librerias para las validaciones

export const createProduct = async (req : Request , res:Response) => {
    // console.log(req.body) Vemos los datos que se obtienen

    // 1era Forma de almacenar productos en la BD
    // const product = new Product(req.body)  Creamos una instancia del modelo product con los datos que llegan al momento de hacer esa peticion "POST"
    // await product.save()

    // Validaciones desde la creacion del producto de hacen de la siguiente manera
    // await check("name", "Name is required")
    //     .notEmpty() // Validamos que no este vacio ese campo
    //     .run(req) // Obtenemos el valor del request
    // await check("price", "Price is required")
    //     .notEmpty()
    //     .isNumeric() // Validamos que sea numero
    //     .custom((value:number) => {
    //         value > 0 // value es el valor que llega de request
    //     }).withMessage("precio no valido") // Validacion personalizada
    //     .run(req) //

    //Se crea una funcion aparte para las validaciones de los errores
    // let errors = validationResult(req) // Vemos los errores que existen
    // if (!errors.isEmpty()) {
    //     return res.status(400).send({errors: errors.array()}) // Cancelamos el POST
    // }

    try { // try catch utilizado para manejar otro tipo de erorres
        //2da forma de almacenar productos en la BD
        const product = await Product.create(req.body)
        res.json(product)
    }catch(err){
        console.log(err)
    }

}