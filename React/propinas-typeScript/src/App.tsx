import Item from "./components/Item"
import { menuItems } from "./data/db" //Datos de la base de datos

function App() {
  
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="pr-5">
          <h2 className="text-center text-5xl pb-4 font-bold">Menu</h2>
          <div className="space-y-2">
            {menuItems.map(item => (
              <Item
               key={item.id} // Cada item debe tener un ID unico
               item={item}
              />
            ))}

          </div>
        </div>

        <div>
          <h2>Consumo</h2>

        </div>
      </main>
    </>
  )
}

export default App
