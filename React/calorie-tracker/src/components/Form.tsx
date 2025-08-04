import { categories } from "../data/categories"
import { useState } from "react"

export default function Form() {

    const [activiy, setActivity] = useState({
        category : 1,
        name : '',
        calories : 0
    })

  return (
    <form className="space-y-5 bg-white p-10 shadow rounded-2xl">
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categoria: </label>
            <select 
                className="border p-2 rounded-2xl w-full bg-white" 
                id="category" 
                value={activiy.category}>
                
                {categories.map(category => (
                    <option
                    key={category.id}
                    value={category.id}
                    >
                        {category.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="name" className="font-bold">Actividad: </label>
            <input 
                type="text"  
                id="name" 
                className="border p-2 rounded-2xl w-full bg-white" 
                placeholder="Ej. Comida, Jugo de naranja, Ejercicio, Ensalada, Pesas, Bicicleta"
                value={activiy.name}/>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="font-bold">Calorias: </label>
            <input 
                type="number"  
                id="calories" 
                className="border p-2 rounded-2xl w-full bg-white" 
                placeholder="Ej. 400. 500, etc"
                value={activiy.calories}/>
        </div>

        <input type="submit" className="bg-gray-600 text-white cursor-pointer w-full  p-2 hover:bg-gray-900 font-bold uppercase" value={'Guardar'}/>
    </form>
)}
