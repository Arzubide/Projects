import { useMemo } from "react"
import BudgetForm from "./components/BudgetForm"
import { useBudget } from "./hooks/useBudget"
import BudgetTracker from "./components/BudgetTracker"

function App() {

    // const context = useContext(BudgetContext) Creamos esta variable utilizando el hook useContext para acceder a nuestro estado con una sola variable pero existe otra alternativa que es crear un custom hook useBudget.

    const {state} = useBudget()

    const isValidBudget = useMemo(() => state.budget > 0 , [state.budget])

    return (
      <>
        <header className="bg-blue-600 py-8 max-h-72">
          <h1 className="uppercase text-center font-black text-4xl text-white">Planificador de gastos</h1>
        </header>

        <div className="max-w-3xl mx-auto shadow-2xl rounded-lg mt-10 p-10 bg-white">
            {isValidBudget ?  
              // Si el state es mayor a 0 muestra lo siguiente
                <BudgetTracker
                /> 
              : 
                // Si el state es igual a 0 retornamos nuestro componente
                <BudgetForm/>}
        </div>
      </>
    )
}

export default App
