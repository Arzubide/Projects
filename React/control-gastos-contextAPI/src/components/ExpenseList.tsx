import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"
import FilterByCategory from "./FilterByCategory"

export default function ExpenseList() {
    const {state} = useBudget()
    return (
        <>
            <p className="text-gray-600 text-2xl font-bold my-5 text-center">
                Listado de gastos
            </p>
            
            <FilterByCategory/>

            {state.expenses.map((expense) => (
                <ExpenseDetail
                    key={expense.id}
                    expense={expense}
                />
            ))}
        </>
    )
}
