import { useMemo } from "react"
import { useAppStore } from "../store/useAppStore"
import DrinkCard from "../components/DrinkCard"

export default function IndexPage() {
    
    const drinks = useAppStore((state)=>state.drinks) // Obtenemos los datos que se almacenan en drinks desde el store
    const hasDrinks = useMemo(()=> drinks.drinks.length >0 ,[drinks]) // si tenemos drinks en el store

    return (
        <>
            <div className="border-2 border-gray-200 p-5 rounded-2xl">
                <h1 className="text-2xl text-center font-extrabold">Bebidas</h1>
                {hasDrinks ? (
                    <div className="grid grid-cols-2 pt-5">
                        {drinks.drinks.map((drink) => (
                            <DrinkCard
                                key={drink.idDrink}
                                drink={drink}
                            />
                        ))}
                    </div>
                ): (
                    <div>
                        <p className="text-center mt-5 mb-5 text-gray-500">Busca una bebida</p>
                    </div>
                )}
            </div>
        </>
    )
}
