import { useMemo } from "react";
import { formatDate } from "../helpers";
import type { Expense } from "../types";
import AmountDisplay from "./AmountDisplay";
import { categories } from "../data/categories";
type ExpenseDetailProps = {
    expense : Expense
}
export default function ExpenseDetail({expense} : ExpenseDetailProps) {
    
    const categoryInfo = useMemo(() => categories.filter(cat => cat.id === expense.category)[0] ,[expense]) // expense.category almacena un string del 1-7
    // agregamos el [0] para traer el contenido de la posicion en lugar de devolverlos todo el arreglo

    return (
            <div className=" bg-white shadow-2xl p-10 w-fullb border-b border-gray-200 flex gap-5">
                <div>
                    <img src={`/icono_${categoryInfo.icon}.svg`} alt="" className="w-20 space-y-3" />
                </div>

                <div className="flex-10"> {/* flex1 toma todo el ancho disponible */}
                    <p className="text-sm font-bold uppercase text-slate-500">{categoryInfo.name}</p>
                    <p>{expense.expenseName}</p>
                    <p className="text-slate-600 text-sm">{formatDate(expense.date!.toString())}</p>
                </div>

                <div className="py-5">
                    <AmountDisplay
                    amount={expense.amount}
                />
                </div>
                
            </div>
    )
}
