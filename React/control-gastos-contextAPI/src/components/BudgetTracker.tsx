import { useBudget } from "../hooks/useBudget"
import AmountDisplay from "./AmountDisplay"

export default function BudgetTracker() {

    const {state, available, spent} = useBudget()

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex justify-center">
                    <img src="/grafico.jpg" alt="Imagen con graficos" />
                </div>
                <div className="flex flex-col justify-center items-center gap-8">
                    <AmountDisplay
                        label = "Presupuesto"
                        amount = {state.budget}
                    />
                    <AmountDisplay
                        label = "Disponible"
                        amount = {available}
                    />
                    <AmountDisplay
                        label = "Gastado"
                        amount = {spent}
                    />
                    <button
                        type="button"
                        className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-full cursor-pointer hover:bg-pink-800"
                        onClick={()=> {}}
                    >
                        Resetear app
                    </button>
                    
                </div>
            </div>
        </>
    )
}
