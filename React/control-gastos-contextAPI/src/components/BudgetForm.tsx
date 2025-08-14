import { useMemo, useState } from "react"


export default function BudgetForm() {

    const [budget, setBudget] = useState(0)

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber) // Seteamos el valor que ingrese al usuario
    }

    const isValid = useMemo(() => { // Usamos useMemo solo para activar esta funcion cuando haya un cambio en budget
        return isNaN(budget) || budget<=0 // retornamos true o false
    }, [budget])

    return (
        <form className="space-y-3"> 
            <div className="flex flex-col space-y-5">
                <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">
                    Definir presupuesto:
                </label>
                <input 
                    name="budget"
                    id="budget"
                    type="number" 
                    className="full bg-white border border-gray-200 p-2 shadow"
                    placeholder="Define tu presupuesto"
                    value={budget}
                    onChange={handleChange}
                />
            </div>

            <input 
                type="submit"
                value="Definir presupuesto"
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer p-2 w-full rounded-2xl text-white uppercase font-bold disabled:opacity-35"
                disabled={isValid}
            />
        </form>
    )
}
