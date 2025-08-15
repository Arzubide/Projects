import BudgetForm from "./components/BudgetForm"

function App() {

    // const context = useContext(BudgetContext) Creamos esta variable utilizando el hook useContext para acceder a nuestro estado con una sola variable pero existe otra alternativa que es crear un custom hook useBudget.

    return (
      <>
        <header className="bg-blue-600 py-8 max-h-72">
          <h1 className="uppercase text-center font-black text-4xl text-white">Planificador de gastos</h1>
        </header>

        <div className="max-w-3xl mx-auto shadow-2xl rounded-lg mt-10 p-10 bg-white">
          <BudgetForm
          
          />
        </div>
      </>
    )
}

export default App
