import { categories } from "../data/categories"
import DatePicker from 'react-date-picker'; // Sacado de https://www.npmjs.com/package/react-date-picker
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

import { useState } from "react";
import type { DraftExpense } from "../types";

export default function ExpenseForm() {

    const [expense, setExpense] = useState<DraftExpense>({
       amount : 0,
       expenseName : '',
       category : '',
       date : new Date()

    })

    return (
        <>
          <form className="space-y-5">
            <legend
              className="border-b-4 border-blue-500 text-center uppercase font-bold text-2xl py-2 "
            >Nuevo gasto</legend>

            <div className="flex flex-col gap-2">
              <label 
                htmlFor="expenseName" className="text-xl">
              Nombre de gasto: </label>
              <input 
                type="text" 
                id="expenseName" 
                name="expenseName" 
                className="py-2 shadow-2xl bg-slate-100 rounded-xl placeholder:text-center" 
                placeholder="Añande el nombre del gasto"
                value={expense.expenseName}
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
                className="py-2 shadow-2xl bg-slate-100 rounded-xl placeholder:text-center" 
                placeholder="Añade la cantidad del gasto"
                value={expense.amount}
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label 
                htmlFor="category" className="text-xl">
              Categoria: </label>
              <select id="category" name="category" className="py-2 shadow-2xl bg-slate-100 rounded-xl" value={expense.category}>
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
              />
            </div>

            <input type="submit" value="Registrar gasto" className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-2xl hover:bg-blue-800" />
          </form>
        </>
    )
}
