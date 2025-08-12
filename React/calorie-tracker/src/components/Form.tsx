import { v4 as uuidv4 } from "uuid"
import type { Activity } from "../types"
import { categories } from "../data/categories"
import { useEffect, useState, type Dispatch } from "react"
import type { ActivityActions, ActivityState } from "../reducers/activity-reducer"

type FormProps = {
    dispatch : Dispatch<ActivityActions>
    state : ActivityState
}

const initialState : Activity = {
    id : uuidv4(), // Funcion para generar un ID unico gracias a la dependencia instalada
    category : 1,
    name : '',
    calories : 0
}

export default function Form({dispatch, state} : FormProps) {

    const [activity, setActivity] = useState<Activity>(initialState)

    useEffect(()=> {
        if(state.activeID){
            /* El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada. Retorna un nuevo arreglo */
            const selectedActivity = state.activities.filter((actividad) => state.activeID === actividad.id)[0] // Se agrega el [0] para acceder a los elementos del arreglo que terna filter
            setActivity(selectedActivity) // Obtenemos los valores de la actividad en el formulario
            // setActivity(selectedActivity)
        }
    }, [state.activeID]) // Escucharemos si hay algo en el ID activo


    const handleChange = (e : React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => { // Esta tipado asi debido a que se ocupa esta funcion se ocupa en esos dos tipos de eleventos, select o input

        // Debido a que dentro de la aplicacion web en lugar de ser seteados como numbero, todo lo setea con string, primero vamos a identificar cuales son los inputs que se deben setear como numeros y cuales no
        const isNumberField = ['category', 'calories'].includes(e.target.id) // Si obtenemos el id que esta dentro de los strings dentro, retorna true, de lo contrario retorna false. Asi podemos manejar el control de numero y de strings

        /* Con e.taget.id sabes que elemento es que esta seleccionando o de donde proviene la entrada. Con e.target.value obtenemos el valor ingresado por el usuario */
        setActivity({
            ...activity, // Hacemos una copia de lo que esta previamene seteado
            [e.target.id] : isNumberField ? +e.target.value : e.target.value // Seteamos los nuevos valores  [KEY] : VALUE. Key va entre llaves para que ts lo interprete como variable y no como la llave literal (e.target.id)
        })
    }

    const isValidActivity = () => {
        const {name, calories} = activity
        return name.trim() !== '' && calories > 0 // trim( ) elimina los espacios en blanco en ambos extremos del string. SI ES VERDADERO SE DESAVILITA
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() // Evitamos que se actualice la pagina
        dispatch({type : 'save-activity', payload : {newActivity : activity}})
        
        setActivity({ // Reiniciamos el formulario
            ...initialState,
            id : uuidv4() // Se agrega una vez mas para no tener ids repetidos
        })
    }

  return (
    <form 
        className="space-y-5 bg-white p-10 shadow rounded-2xl"
        onSubmit={handleSubmit}
    >
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
                placeholder={activity.category == 1 ? 'Ej. Comida, ensalada, cena' : 'Ej. Pesas, bicicleta, correr'}
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

        <input 
            type="submit" 
            className="bg-gray-600 text-white cursor-pointer w-full  p-2 hover:bg-gray-900 font-bold uppercase disabled:opacity-25" 
            value={activity.category == 1 ? 'Guardar comida' : 'Guardar ejercicio'}
            disabled={!isValidActivity()} // Si se cumple la condicion se habilita, si es falso se desabilita el boton
            />
    </form>
)}
