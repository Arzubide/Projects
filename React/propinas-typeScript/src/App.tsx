import Item from "./components/Item"
import OrderContent from "./components/orderContent"
import { menuItems } from "./data/db" //Datos de la base de datos
import useOrder from "./hooks/useOrder"

function App() {
  
  const { addItem, order, removeFromOrder } = useOrder() // Agregamos las funciones del hook personalizado

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
               addItem={addItem} // le pasamos la funcion al componente
              />
            ))}

          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            <OrderContent
              order={order}
              removeFromOrder={removeFromOrder}
            />
        </div>
      </main>
    </>
  )
}

export default App
