import { create } from 'zustand'
import { createRecipeSlice, type RecipesSliceType } from './recipeSlice'
import { type favoriteSliceType, createFavoriteSlice} from "./favoritesSlice"
import { type notificationSliceType, createNotificationSlice } from './notificationSlice'

export const useAppStore = create<RecipesSliceType & favoriteSliceType & notificationSliceType>((...a)=>({
    /* 
        ...a es el operador rest que captura todos los argumentos que create le pasa a la funcion en un array
            en este caso internamente le pasamos los 3 argumentos set(funcion para actualizar estado) ,get(funcion para leer el estado actual) y api(objeto con metodos internos de zustand)

        // Estas dos líneas son IDÉNTICAS:
        create((...a) => ({...}))
        create((set, get, api) => ({...}))
    */
    ...createRecipeSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a)
}))