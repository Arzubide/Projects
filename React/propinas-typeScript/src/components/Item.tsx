// Solo agregando RFC(react function component), con la extension instalada ya te crea el componente automaticamente, solo eliminamos la primera linea de codigo que te genera
import type { menuItem } from "../types"

type ItemsProps = {
  item : menuItem // Definimos que el item que recibe el componente es de tipo menuItem
}


export default function Item({item} : ItemsProps) {
  return (
    
    <button
      className="border-2 border-teal-400 w-full p-4 flex justify-between hover:bg-teal-300"
    >
      <p className="text-2xl">{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}

