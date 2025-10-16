import axios from "axios"
// Axios es una libreria de JavaScript para hacer peticiones HTTP
import { CategoriesAPIREsponseSchema } from "../utils/recipes-schema"

export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list' // API de donde sacamos las categorias

    const { data } = await axios(url) // Obtenemos los datos de la API (url)
    const result = CategoriesAPIREsponseSchema.safeParse(data) // Confirmamos que los datos esten de acuerdo al esquema que se establecio en recipes-schema.ts

    if (result.success) {
        return result.data
    } 
}