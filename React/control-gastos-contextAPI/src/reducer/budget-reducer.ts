import { __unstable__loadDesignSystem } from "tailwindcss"
import type { Category, DraftExpense, Expense } from "../types"
import {v4 as uuidv4} from 'uuid'

export type BudgetActions = 
    {type : 'add-budget', payload : {budget : number}} |
    {type : 'show-modal'} |
    {type: 'close-modal'} |
    {type : 'add-expense', payload : {expense : DraftExpense}} |
    {type : 'delete-expense', payload : {id : Expense['id']}} |
    {type : 'get-expense-by-id', payload : {id : Expense['id']}} |
    {type : 'edit-expense', payload : {expense : Expense}} |
    {type : 'reset-app'} |
    {type : 'add-filter-category', payload : {id : Category['id']}}

export type BudetState = {
    budget : number
    modal : boolean
    expenses : Expense[]
    editingId: Expense['id']
    currentCategory : Category['id']
}

const localStorageInitialBudget = () : number  => {
    const storageBudget = localStorage.getItem('budget')
    return storageBudget ? +storageBudget : 0
}

const localStorageExpenses = () : Expense[] =>{
    const expense = localStorage.getItem('expense')
    return expense ? JSON.parse(expense) : []
}

export const InitialState : BudetState = {
    budget : localStorageInitialBudget(),
    modal: false, // Indicamos que el modal estara oculto predeterminadamente
    expenses : localStorageExpenses(),
    editingId : '',
    currentCategory : ''
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
            modal: false,
            editingId : '' // Siempre reiniciamos el modal cada vez que se cierre
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

    if (action.type === 'delete-expense') {
        return {
            ...state,
            expenses : state.expenses.filter(expense => expense.id != action.payload.id)
        }
    }

    if (action.type === 'get-expense-by-id') {
        return{
            ...state,
            editingId : action.payload.id, // Escribimos en editingId lo que obtine la accion 
            modal : true // Abrimos el modal para mostrar la informacion
        }
    }

    if (action.type === 'edit-expense') {
        return {
            ...state,
            expenses : state.expenses.map(expense => expense.id === action.payload.expense.id ? action.payload.expense : expense),
            modal : false
        }
    }

    if (action.type === 'reset-app') {
        return {
            budget : 0,
            modal: false, 
            expenses : [],
            editingId : ''
        }
    }

    if (action.type === 'add-filter-category') {
        return {
            ...state,
            currentCategory : action.payload.id
        }
    }

    return state
}