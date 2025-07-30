import { useMemo } from "react"
import type { orderItem } from "../types"
import Item from "./Item"

type componentProps={
    order : orderItem[]
}


export default function OrderTotals({order}: componentProps) {
  
//   const subTotal = useMemo(() => order.reduce( (total , item) => total + (item.quantity * item.price), 0)   , [order])
    const subTotal = order.reduce(
        (total, item) => total + (item.price * item.quantity), 0
    )


  /* The next way is how its works reduce
  const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
  */

    return (
    <>
        <div className=" space-y-3">
            <h2 className="font-black text-2xl">Totales y propina: </h2>
            <p>Subtotal a pagar:
                <span className="font-black"> ${subTotal}.00</span>
            </p>
            <p>Propina: 
                <span className="font-black"> $0</span>
            </p>
            <p>Total a pagar: 
                <span className="font-black"> $0</span>
            </p>
        </div>
        <button></button>
    </>
  )
}
