import axios from "axios"
// Axios es una libreria de JavaScript para hacer peticiones HTTP
import { bebidasEschema, CategoriesAPIREsponseSchema } from "../utils/recipes-schema"
import type { SearchFilter } from "../types"

export async function getCategories() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list' // API de donde sacamos las categorias

    const { data } = await axios(url) // Obtenemos los datos de la API (url)
    const result = CategoriesAPIREsponseSchema.safeParse(data) // Confirmamos que los datos esten de acuerdo al esquema que se establecio en recipes-schema.ts

    if (result.success) {
        return result.data
    } 
}

export async function getRecipies(filters:SearchFilter) {
    //Obentemos la informacion del formulario desde recipiesSlice

    // Creamos la url la cual consulta con queryStrings para los filtros de categoria y de ingredientes
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const {data} = await axios(url) // Obtenemos los datos de la API
    const result = bebidasEschema.safeParse(data) // Verificamos que los datos esten bien con base al esquema definido

    if (result.success) {
        return result.data 
    }

}