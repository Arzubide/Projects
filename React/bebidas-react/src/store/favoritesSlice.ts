import type { StateCreator } from "zustand"
import type { DetailsDrink } from "../types"

export type favoriteSliceType = {
    favorites : DetailsDrink[] // Guardaremos la informacion de la receta
    handleClickFavorite : (drink : DetailsDrink) => void
}



export const createFavoriteSlice : StateCreator<favoriteSliceType> = (set,get) => ({
    // Metodo get nos sirve para obtener los valores dentro de nuestro store
    favorites : [],
    handleClickFavorite : (recipie)=> {
        if (get().favorites.some(favorite => favorite.idDrink === recipie.idDrink)) {
            //Comprobamos que el elemento que se añada a favoritos no exista ya en favoritos
            console.log('ya existe el elemento')
        }else{
            set({
                favorites : [...get().favorites, recipie]
            })
        }
    }  
})