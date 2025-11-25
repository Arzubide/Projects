import {Request,Response} from "express"
import Product from "../Models/Product.model";

export const getProduct = async (req: Request, res: Response) => {
    try {
        // Accedemos a la base de datos y a su vez accedemos a los metodos de la base de datos, en este caso accedemos a todos, se ocupan find... para acceder a la BD
        const product = await Product.findAll({
            attributes : {exclude : ['createdAt', 'updatedAt', 'availability']}, // De esta manera filtramos los datos que no queremos que se muestren al momento de hacer la peticion
        })
        res.json({data : product}) // Mandamos los datos de la BD
    } catch(error) {
        console.log(error)
    }
}


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