import type { StateCreator } from "zustand"
import type { DetailsDrink } from "../types"

export type favoriteSliceType = {
    favorites : DetailsDrink[] // Guardaremos la informacion de la receta

}

export const createFavoriteSlice : StateCreator<favoriteSliceType> = () => ({
    favorites : []
})