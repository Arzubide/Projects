import {Request,Response} from "express"
import Product from "../Models/Product.model";

export const createProduct = async (req : Request , res:Response) => {
    // console.log(req.body) Vemos los datos que se obtienen

    // 1era Forma de almacenar productos en la BD
    // const product = new Product(req.body)  Creamos una instancia del modelo product con los datos que llegan al momento de hacer esa peticion "POST"
    // await product.save()

    //2da forma de almacenar productos en la BD
    const product = await Product.create(req.body)
    res.json(product)

}