import {z} from 'zod'
import { CategoriesAPIREsponseSchema, searchFilterSchema } from '../utils/recipes-schema'

export type Categories = z.infer<typeof CategoriesAPIREsponseSchema> // Definimos el type de categorias basandonos en el esquema creado que recibe los datos de la API
export type SearchFilter = z.infer<typeof searchFilterSchema>