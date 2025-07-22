/*
Creando nuestro propio hook. Los hooks solo contiene logica del programa y son fucniones. Por ello es que son como tal funciones con logica. Aqui lo importante es llamar las funciones correctas, se coloca inicialmente use y despues el nombre del hook. useCart

Al momento de retornar la funcion para poder utilizarla, se recomienda que se retorne como objeto, esto con fines de poder acceder facilmente desde la apps.jsx o desde donde queramos acceder a esete hook

*/
import { useState, useEffect, useMemo } from 'react'
import { db } from '../data/db'
import type { Guitar ,cartItem, guitarId } from '../types/types'

const useCart = () =>{
    
    const initialCart = () : cartItem[] => { // Indicamos que el carro inicial tendra los tipos de datos que tendra carItem
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [data] = useState(db)
    const [cart, setCart] = useState(initialCart)

    const MIN_ITEMS = 1
    const MAX_ITEMS = 5

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function addToCart(item : Guitar) {
        const itemExists = cart.findIndex(guitar => guitar.id === item.id)
        if(itemExists >= 0 ) { // existe en el carrito
            if(cart[itemExists].quantity >= MAX_ITEMS) return
            const updatedCart = [...cart]
            updatedCart[itemExists].quantity++
            setCart(updatedCart)
        } else {
            const newItem : cartItem = {...item, quantity : 1}
            // item.quantity = 1
            setCart([...cart, newItem])
        }
    }

    function removeFromCart(id : guitarId) {
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
    }

    function decreaseQuantity(id : guitarId) {
        const updatedCart = cart.map( item => {
        if(item.id === id && item.quantity > MIN_ITEMS) {
            return {
                ...item,
                quantity: item.quantity - 1
            }
        }
        return item
        })
        setCart(updatedCart)
    }

    function increaseQuantity(id : guitarId) {
        const updatedCart = cart.map( item => {
        if(item.id === id && item.quantity < MAX_ITEMS) {
            return {
                ...item,
                quantity: item.quantity + 1
            }
        }
        return item
        })
        setCart(updatedCart)
    }

    function clearCart() {
        setCart([])
    }

    // Funciones del header
    const isEmpty = useMemo( () => cart.length === 0, [cart])
    const cartTotal = useMemo( () => cart.reduce( (total, item ) => total + (item.quantity * item.price), 0), [cart] )

    return{
        data,
        cart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
        addToCart,
        isEmpty,
        cartTotal
    }
}

export default useCart // Para poder importarlo a otro modulo