import Item from "./components/Item"
import { menuItems } from "./data/db" //Datos de la base de datos

function App() {
  
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2>Menu</h2>
            {menuItems.map(item => (
              <Item
               key={item.id} // Cada item debe tener un ID unico
               
              />
            ))}
        </div>

        <div>
          <h2>Consumo</h2>

        </div>
      </main>
    </>
  )
}

export default App
