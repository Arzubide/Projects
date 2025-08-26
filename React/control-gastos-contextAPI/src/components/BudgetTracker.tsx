import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import { useBudget } from "../hooks/useBudget"
import AmountDisplay from "./AmountDisplay"
import 'react-circular-progressbar/dist/styles.css'

export default function BudgetTracker() {

    const {state, available, spent} = useBudget()
    const bar = +((available*100)/state.budget)
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex justify-center">
                    <CircularProgressbar
                        value={bar}
                        styles={buildStyles({
                            pathColor : bar < 30 ? '#dc2626' : '#3b82f6',
                            trailColor : '#F5F5F5',
                            textColor : '#3b82f6'
                        })}
                        text={`${bar}%`}
                    />
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
