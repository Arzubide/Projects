import { useState } from "react"
import type { menuItem, orderItem } from "../types"
import Item from "../components/Item"


export default function useOrder() {
    const [order, setOrder] = useState<orderItem[]>([]) // Utilizamos Generic <> para definir el tipo de dato que es order

    const addItem = (item : menuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id) // Si el item que se agrega (orderItem) es igual al que se encuentra en el menu (item)
        if (itemExist) {
            // Si dentro del carro ya existe el mismo elemento
            const updateOrder = order.map(orderItem => orderItem.id === item.id ? { // Hacemos copia del arreglo original y trabajamos sobre el
                ...orderItem, quantity : orderItem.quantity + 1
            } : orderItem )

            setOrder(updateOrder)

        }else{
            // si dentro del carro no esta registrado un elemento anterior
            const newItem = {...item , quantity : 1}
            setOrder([...order, newItem])

        } 
        
    }

    function removeFromOrder(id : menuItem['id']) {
        setOrder(orderPrev => orderPrev.filter(item => item.id !== id))
    }

    return {
        addItem,
        order, 
        removeFromOrder
    }
}
