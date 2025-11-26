import express from "express";
import {body,param, validationResult} from 'express-validator'
import {Default} from "sequelize-typescript";

export const validationById = [ // Validacion para los parametros de la url
    param('id'). // Se utiliza param para los parametros de una URL
        isInt()
]

export const validation = [
    // creamos un array de validaciones para usarse desde el router
    body("name")
        .notEmpty()
        .isString()
        .withMessage("Name is required"), // Las validaciones deben retornarse como array
    
    body("price")
        .notEmpty()
        .withMessage("Price is required")
        .isNumeric()
        .withMessage("Price must be a number")
        .custom((value: number) => {
            if (value <= 0) {
                throw new Error('Price must be greater than 0')
            }
            return true // Importante: retornar true cuando la validación pasa
        }),
    body("availability")
        .optional() // Hace el campo opcional para que no sea requerido
        .isBoolean()
        .withMessage("Availability must be boolean")
]

export const handleInputError = (req: express.Request, res: express.Response, next) => {

    let errors = validationResult(req) // Vemos los errores que existen
    if (!errors.isEmpty()) {
        return res.status(400).send({errors: errors.array()}) // Cancelamos el POST
    }
    next() // Continua con el siguiente middleware
}