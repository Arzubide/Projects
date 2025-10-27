import {z} from 'zod'
import { bebidasEschema, CategoriesAPIREsponseSchema, drinkSchema, ingredientsSchema, searchFilterSchema } from '../utils/recipes-schema'

export type Categories = z.infer<typeof CategoriesAPIREsponseSchema> // Definimos el type de categorias basandonos en el esquema creado que recibe los datos de la API
export type SearchFilter = z.infer<typeof searchFilterSchema>
export type Drinks = z.infer<typeof bebidasEschema>
export type Drink = z.infer<typeof drinkSchema> // Tipo para una bebida individual
export type DetailsDrink = z.infer<typeof ingredientsSchema> // Creamos el type para el state de selectedRecipie en el store