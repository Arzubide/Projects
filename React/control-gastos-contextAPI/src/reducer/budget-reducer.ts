import { __unstable__loadDesignSystem } from "tailwindcss"

export type BudgetActions = 
    {type : 'add-budget', payload : {budget : number}}

export type BudetState = {
    budget : number
}

export const InitialState : BudetState = {
    budget : 0
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
    return state
}