import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../store/useAppStore"
import { useMemo } from "react"

export default function FavoritesPages() {
  
    const favorites = useAppStore((state)=>state.favorites) // Traemos las bebidas favoritas
    const hasFavorites = useMemo(()=> favorites.length>0, [favorites]) // Si existen bebidas en favoritos

    return (
        <>
          <h1 className="font-bold uppercase text-2xl text-center">Favorites</h1>
          {hasFavorites ? 
          
            <div className="grid grid-cols-2 pt-5  md:grid-cols-3 2xl:grid-cols-4">
              {favorites.map((favoriteDrink)=>(
                <DrinkCard
                  key={favoriteDrink.idDrink}
                  drink = {favoriteDrink}
                />
              ))}
            </div>
        
          :
              <p className="text-center mt-5 mb-5 text-gray-500">Aun no tienes bebidas favoritas</p>
          }
        </>
    )
}
