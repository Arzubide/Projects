import type { StateCreator } from "zustand"
import type { DetailsDrink } from "../types"
import { createRecipeSlice, type RecipesSliceType } from "./recipeSlice" // Importamos el slice a este slice

export type favoriteSliceType = {
    favorites : DetailsDrink[] // Guardaremos la informacion de la receta
    handleClickFavorite : (drink : DetailsDrink) => void
}



export const createFavoriteSlice : StateCreator<favoriteSliceType & RecipesSliceType, [],[],favoriteSliceType> = (set,get,api) => ({
    // Metodo get nos sirve para obtener los valores dentro de nuestro store
    favorites : [],
    handleClickFavorite : (recipie)=> {
        if (get().favorites.some(favorite => favorite.idDrink === recipie.idDrink)) {
            //Comprobamos que el elemento que se añada a favoritos no exista ya en favoritos
            set({
                favorites : get().favorites.filter(favorite => favorite.idDrink !== recipie.idDrink) // Si ya existe, se eliminara de favoritos si le vuelve a dar click
            })
        }else{
            set({
                favorites : [...get().favorites, recipie]
            })
        }

        createRecipeSlice(set,get,api).closeModal() // Accedemos al store del otro slice, esto debido a que establecimos comunicacion con el otro slice con:  favoriteSliceType & RecipesSliceType, [],[],favoriteSliceType
    }  
})