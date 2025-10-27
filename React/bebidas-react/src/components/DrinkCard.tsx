import type { Drink } from "../types"
import { useAppStore } from "../store/useAppStore"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({drink} : DrinkCardProps) {
    
    const selectRecipie = useAppStore((state) => state.selectRecipie)

    return (
        <div className="border border-gray-300 rounded-2xl p-3 shadow-2xl mb-15 ml-2.5 mr-2.5">
            <div>
                <img 
                    className="rounded-2xl text-center hover:scale-118 transition-transform"
                    src={drink.strDrinkThumb}
                    alt="Imagen de bebida" />
            </div>

            <div className="p-5">
                <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
                <button
                    type="button"
                    className="bg-orange-400 hover:bg-orange-500 cursor-pointer p-5 rounded-2xl text-white w-full"
                    onClick={()=> {selectRecipie(drink.idDrink)}} // Le pasamos el id de la bebida
                >
                    Mas detalles
                </button>
            </div>
        </div>
    )
}
