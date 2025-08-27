import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"
import FilterByCategory from "./FilterByCategory"

export default function ExpenseList() {
    const {state} = useBudget()
    const filteredExpenses = state.currentCategory ? state.expenses.filter(expense => expense.category === state.currentCategory) : state.expenses  
    const isExpenses = useMemo(()=> filteredExpenses.length > 0,[filteredExpenses])  

    return (
        <>
            <p className="text-gray-600 text-2xl font-bold my-5 text-center">
                Listado de gastos
            </p>
            <FilterByCategory/>
            {
                isExpenses ?filteredExpenses.map((expense) => (
                    <ExpenseDetail
                        key={expense.id}
                        expense={expense}
                    />
                )) :
                <div className="bg-white shadow-2xl  p-10">
                    <p className="text-center font-bold pt-4 text-gray-600">No hay gastos registrados</p>
                </div>
            }

            {}
        </>
    )
}
