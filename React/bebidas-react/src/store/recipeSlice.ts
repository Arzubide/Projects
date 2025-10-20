import type { StateCreator } from "zustand"
import { getCategories } from "../Services/RecipeService"
import type { Categories, SearchFilter } from "../types"

export type RecipesSliceType ={
    categories : Categories
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilter : SearchFilter) => Promise<void>
}

export const createRecipeSlice : StateCreator<RecipesSliceType> = (set) => (
    {
        categories:{ // Se le da esta estructura debido al esquema que se definio, aqui tenemos las categorias
            drinks : []
        },
        fetchCategories: async () =>  {
            const categories = await getCategories() // La variable categories tiene ya las categorias que se obtuvieron en RecipeService
            set({
                categories
            })
        },
        searchRecipes : async (filter) => { // Con searchFilter, obtenemos los datos ingresados en el formulario de header, los datos los tiene filter, tanto categoria como el input
            console.log(filter)
        }
    }
)