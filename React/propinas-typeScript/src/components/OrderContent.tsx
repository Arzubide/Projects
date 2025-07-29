import type { menuItem, orderItem } from "../types"


type componentProps = {
    order : orderItem[]
    removeFromOrder : (id : menuItem['id']) => void
}
export default function OrderContent({order, removeFromOrder} : componentProps) {
  return (
    <div>
        <h1 className='text-center text-5xl pb-4 font-bold'>Consumo</h1>
        {order.length === 0 ? 
            <p className="text-center p-5">La orden esta vacia</p>
        :
            (
                order.map(item => (
                    <div key={item.id}
                    className="flex justify-between border-t border-gray-300 py-5 items-center last-of-type:border-b"
                    > 
                        <div >
                            <p>{item.name} - ${item.price}.00</p>
                            <p className="font-black">Cantidad {item.quantity} - Total ${item.price * item.quantity}.00</p>
                        </div>
                        <button className="bg-red-500 h-8 w-8 rounded-full text-amber-50 font-black hover:bg-blue-500" onClick={() => removeFromOrder(item.id)}>
                            X
                        </button>
                    </div>
                ))
            )
        }
    </div>
  )
}
