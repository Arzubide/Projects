import { categories } from "../data/categories"
import DatePicker from 'react-date-picker'; // Sacado de https://www.npmjs.com/package/react-date-picker
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

import { useEffect, useState } from "react";
import type { DraftExpense, Value } from "../types";
import ErrorMesage from "./ErrorMesage";
import { useBudget } from "../hooks/useBudget";

export default function ExpenseForm() {

    const {dispatch, state} = useBudget() 

    const [expense, setExpense] = useState<DraftExpense>({
       amount : 0,
       expenseName : '',
       category : '',
       date : new Date()
    })

    useEffect(() => {

      if (state.editingId) {
          const editingExpense = state.expenses.filter(currenteExpense => currenteExpense.id === state.editingId)[0] // Traemos todo el contendio del gasto que se quiera editar
          setExpense(editingExpense)
      }

    }, [state.editingId]) // Cada que cambie el state con editingid hara lo anterior 

    const [error, setError] = useState('')

    const handleChangeDate = (value : Value) => {
        setExpense({
          ...expense,
          date : value
        })
    }

    const handlechange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const {name , value} = e.target // Name y value hace referencia a los name y value de cada input
        const isAmountField = ['amount'].includes(name) // De esta manera detectamos si estamos escribiendo en el imput amount, retorna true o false
        setExpense({
          ...expense,
          [name] : isAmountField ? +value : value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Validamos 
        if (Object.values(expense).includes('')) { // Si alguno de los campos de expense contiene una cadena vacia
          setError('Todos los campos deben ser llenados')
          return // Agregamos el return para que se ejecute el siguiente codigo una vez termine de hacer la comprobacion
        }

        // Agregar o actualizar el gasto
        if (state.editingId) {
            // Si existe algo solo editamos
            dispatch({type : 'edit-expense', payload : {expense : {id : state.editingId, ...expense}}}) // Debido a que el expense no tiene id (se definio como draftExpense) le damos el id que le hace falta y le pasamos el resto con la copia que ya tiene
        }else {
          // Agregamos un nuevo gasto
            dispatch({type : 'add-expense' , payload : {expense}})
        }

        state.editingId = ''
        // Reiniciamos el formulario
        setExpense({
          amount : 0,
          expenseName : '',
          category : '',
          date : new Date()
        })

    }

    return (
        <>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <legend
              className="border-b-4 border-blue-500 text-center uppercase font-bold text-2xl py-2 "
            >Nuevo gasto</legend>

            {error && <ErrorMesage> {/* && es como un ternario, solo que aqui unicamente validamos si existe algo en error */}
              {/* Aqui vemos que el componente tiene etiqueta de apertura y cierre, esto se hace para que lo que le pasemos lo rederice el componente, aqui tambien cambia la sintaxis dentro del componente */}
              {error}
            </ErrorMesage>} 

            <div className="flex flex-col gap-2">
              <label 
                htmlFor="expenseName" className="text-xl">
              Nombre de gasto: </label>
              <input 
                type="text" 
                id="expenseName" 
                name="expenseName" 
                className="py-2 shadow-2xl bg-slate-100 rounded-xl placeholder:text-center text-center" 
                placeholder="Añande el nombre del gasto"
                value={expense.expenseName}
                onChange={handlechange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label 
                htmlFor="amount" className="text-xl">
              Cantidad: </label>
              <input 
                type="number" 
                id="amount" 
                name="amount" 
                className="py-2 shadow-2xl bg-slate-100 rounded-xl placeholder:text-center text-center" 
                placeholder="Añade la cantidad del gasto"
                value={expense.amount}
                onChange={handlechange}
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label 
                htmlFor="category" className="text-xl">
              Categoria: </label>
              <select id="category" name="category" className="py-2 shadow-2xl bg-slate-100 rounded-xl" value={expense.category} onChange={handlechange}>
                <option value="" className="text-center"> -- Seleccione alguna categoria -- </option>
                {categories.map( category => (
                  <option value={category.id} id={category.id} key={category.id} className="text-center">{category.name}</option>
                ) )}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label 
                htmlFor="date" className="text-xl">
              Fecha gasto: </label>
              <DatePicker
                id="date"
                className="bg-amber-50 text-center "
                value={expense.date}
                onChange={handleChangeDate}
              />
            </div>

            <input type="submit" value="Registrar gasto" className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-2xl hover:bg-blue-800" />
          </form>
        </>
    )
}
