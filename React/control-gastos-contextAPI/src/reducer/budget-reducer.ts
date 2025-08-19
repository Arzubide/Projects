import { __unstable__loadDesignSystem } from "tailwindcss"
import type { DraftExpense, Expense } from "../types"
import {v4 as uuidv4} from 'uuid'

export type BudgetActions = 
    {type : 'add-budget', payload : {budget : number}} |
    {type : 'show-modal'} |
    {type: 'close-modal'} |
    {type : 'add-expense', payload : {expense : DraftExpense}}

export type BudetState = {
    budget : number
    modal : boolean
    expenses : Expense[]
}

export const InitialState : BudetState = {
    budget : 0,
    modal: false, // Indicamos que el modal estara oculto predeterminadamente
    expenses : []
}

const createExpenseID = (draftExpense : DraftExpense) : Expense => { //La funncion recibe un draftExpense (expens sin id) y retornamos un expense (draftExpense : DraftExpense) : Expense
    return {
        ...draftExpense,
        id : uuidv4() // Al draftexpense le agregamos un ID
    }
}

export const BudgetReducer = (
    state : BudetState = InitialState,
    action : BudgetActions
) => {
    if (action.type === 'add-budget') {
        return {
            ...state,
            budget : action.payload.budget // Asignamos a budget lo que se obtiene del formulario
        }
    }

    if (action.type === 'show-modal') {
        return {
            ...state,
            modal: true
        }
    }

    if (action.type === 'close-modal') {
        return {
            ...state,
            modal: false
        }
    }

    if (action.type === 'add-expense') {

        const expense = createExpenseID(action.payload.expense) // Le pasamos el gasto que se intenta agregar

        return {
            ...state,
            expenses : [...state.expenses, expense], // Hacemos copia de los gastos registrados y agregamos el nuevo gasto registrado
            modal : false
        }
    }
    return state
}