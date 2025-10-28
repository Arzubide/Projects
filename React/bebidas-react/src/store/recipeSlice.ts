import type { StateCreator } from "zustand"
import { getCategories, getRecipiebyId, getRecipies } from "../Services/RecipeService"
import type { Categories, SearchFilter, Drinks,Drink, DetailsDrink } from "../types"

export type RecipesSliceType ={
    categories : Categories
    drinks : Drinks
    selectedRecipie : DetailsDrink
    modal: boolean
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilter : SearchFilter) => Promise<void>
    selectRecipie : (id : Drink['idDrink']) => Promise<void>
    closeModal: () => void
}

export const createRecipeSlice : StateCreator<RecipesSliceType> = (set) => (
    {
        categories:{ // Se le da esta estructura debido al esquema que se definio, aqui tenemos las categorias
            drinks : []
        },
        drinks : {
            drinks : []
        },
        selectedRecipie : {} as DetailsDrink, // Para no agrear puros strings vacios lo pasamos tal cual como se encuentra en DetailsDrink 
        modal: false, // Estado inicial del modal (cerrado)
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
            const selectedRecipie = await getRecipiebyId(id) // Comunicamos el Store con el servicio de consulta de appi y se guarda la informacion en selectedRecipie. Nuestro store tiene la data de la bebida
            
            set({
                selectedRecipie: selectedRecipie?.drinks[0],
                modal: true // Abrimos el modal cuando se selecciona una receta
            })
        },
        closeModal: () => {
            set({
                modal: false, // Cerramos el modal
                selectedRecipie: {} as DetailsDrink // Limpiamos la receta seleccionada
            })
        }
    }
)