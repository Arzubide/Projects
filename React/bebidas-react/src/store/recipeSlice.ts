import type { StateCreator } from "zustand"
import { getCategories, getRecipiebyId, getRecipies } from "../Services/RecipeService"
import type { Categories, SearchFilter, Drinks,Drink } from "../types"

export type RecipesSliceType ={
    categories : Categories
    drinks : Drinks
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilter : SearchFilter) => Promise<void>
    selectRecipie : (id : Drink['idDrink']) => Promise<void>
}

export const createRecipeSlice : StateCreator<RecipesSliceType> = (set) => (
    {
        categories:{ // Se le da esta estructura debido al esquema que se definio, aqui tenemos las categorias
            drinks : []
        },
        drinks : {
            drinks : []
        },
        fetchCategories: async () =>  {
            const categories = await getCategories() // La variable categories tiene ya las categorias que se obtuvieron en RecipeService
            set({
                categories
            })
        },
        searchRecipes : async (filter) => { // Con searchFilter, obtenemos los datos ingresados en el formulario de header, los datos los tiene filter, tanto categoria como el input
            // getRecipies(filter) // Enviamos los datos del formulario 
            // Una vez que se envian los datos y se validan con zod esos mismos argumentos se crean para una variable que ya traiga los datos JSON de la API
            const drinks = await getRecipies(filter)
            set({
                drinks
            })
        },
        selectRecipie : async (id) => { // Obtenemos el id de la bebida
            await getRecipiebyId(id) // Comunicamos el Store con el servicio de consulta de appi
        }
    }
)