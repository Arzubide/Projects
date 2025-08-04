import type { Activity } from "../types"
import { categories } from "../data/categories"
import { useState } from "react"

export default function Form() {

    const [activity, setActivity] = useState<Activity>({ // Tipamos el state
        category : 1,
        name : '',
        calories : 0
    })


    const handleChange = (e : React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => { // Esta tipado asi debido a que se ocupa esta funcion se ocupa en esos dos tipos de eleventos, select o input

        // Debido a que dentro de la aplicacion web en lugar de ser seteados como numbero, todo lo setea con string, primero vamos a identificar cuales son los inputs que se deben setear como numeros y cuales no
        const isNumberField = ['category', 'calories'].includes(e.target.id) // Si obtenemos el id que esta dentro de los strings dentro, retorna true, de lo contrario retorna false. Asi podemos manejar el control de numero y de strings

        /* Con e.taget.id sabes que elemento es que esta seleccionando o de donde proviene la entrada. Con e.target.value obtenemos el valor ingresado por el usuario */
        setActivity({
            ...activity, // Hacemos una copia de lo que esta previamene seteado
            [e.target.id] : isNumberField ? +e.target.value : e.target.value // Seteamos los nuevos valores  [KEY] : VALUE. Key va entre llaves para que ts lo interprete como variable y no como la llave literal (e.target.id)
        })
    }

  return (
    <form className="space-y-5 bg-white p-10 shadow rounded-2xl">
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categoria: </label>
            <select 
                className="border p-2 rounded-2xl w-full bg-white" 
                id="category" 
                value={activity.category}
                onChange={handleChange}>
                
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
                value={activity.name}
                onChange={handleChange}/>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="font-bold">Calorias: </label>
            <input 
                type="number"  
                id="calories" 
                className="border p-2 rounded-2xl w-full bg-white" 
                placeholder="Ej. 400. 500, etc"
                value={activity.calories}
                onChange={handleChange}/>
        </div>

        <input type="submit" className="bg-gray-600 text-white cursor-pointer w-full  p-2 hover:bg-gray-900 font-bold uppercase" value={'Guardar'}/>
    </form>
)}
