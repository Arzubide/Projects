import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export const useBudget = () => {
    const context = useContext(BudgetContext) // Se crea una variable context usando el hook useContext pasandole la variable BudgetContext que contiene state y dispatch de useReducer
    return context
}