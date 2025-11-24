import {Request,Response} from "express"

export const createProduct = async (req : Request , res:Response) => {
    res.json("Create new product")
}