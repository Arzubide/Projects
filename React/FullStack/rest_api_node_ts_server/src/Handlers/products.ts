import {Request,Response} from "express"
import Product from "../Models/Product.model";

// Función helper para buscar y validar la existencia de un producto
const findProductById = async (id: string, res: Response) => {
    const product = await Product.findByPk(id);
    
    if (!product) {
        res.status(404).send('Product not found');
        return null;
    }
    
    return product;
}

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

export const getProductById = async (req: Request, res: Response) => {
    try{
        const idProduct = req.params.id; // Obtenemos el valor que es pasado a traves de la URL
        const product = await findProductById(idProduct, res);
        
        if (!product) {
            return; // Si el producto no existe, la función helper ya envió la respuesta de error
        }
        
        //Otra forma de encontrar un producto
        // const productt = await Product.findOne({
        //     where : {'id' : idProduct}
        // })

        res.json({data : product}); // Retornamos en JSON el producto con ese ID

    } catch (e) {
        console.log(e)
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

export const updateProduct = async (req : Request , res:Response) => {
    try {
        // Comprobamos si el producto existe
        const idProduct = req.params.id; // Obtenemos el valor que es pasado a traves de la URL
        const product = await findProductById(idProduct, res); // Funcion que verifica la existencia

        if (!product) {
            return; // Si el producto no existe, la función helper ya envió la respuesta de error
        }

        // Actualizacion del producto
        // Sobre la misma instancia de product
        await product.update(req.body) // Actuzalizamos el producto que teniamos
        await product.save() // Guardamos en la BD

        res.json({data : product})

    } catch (e) {
        console.log(e)
    }
}

export const updateAvailableProduct = async (req : Request , res:Response) => {
    try {
        const idProduct = req.params.id
        const product = await findProductById(idProduct, res)

        if (!product) {
            return;
        }

        product.availability = !product.dataValues.availability // De esta manera cada vez que llamemos este edpoint se actualizara automaticamente
        await product.save()

    } catch (e) {
        console.log(e)
    }
}