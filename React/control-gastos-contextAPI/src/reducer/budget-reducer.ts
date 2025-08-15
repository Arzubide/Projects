import { __unstable__loadDesignSystem } from "tailwindcss"

export type BudgetActions = 
    {type : 'add-budget', payload : {budget : number}} |
    {type : 'show-modal'} |
    {type: 'close-modal'}

export type BudetState = {
    budget : number
    modal : boolean
}

export const InitialState : BudetState = {
    budget : 0,
    modal: false // Indicamos que el modal estara oculto predeterminadamente
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
    return state
}