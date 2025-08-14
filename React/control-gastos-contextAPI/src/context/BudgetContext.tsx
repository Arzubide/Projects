import { useReducer, createContext, type ReactNode} from "react"
import { InitialState, BudgetReducer, type BudetState, type BudgetActions} from "../reducer/budget-reducer"

type BudgetContextProps = {
    state : BudetState,
    dispatch : React.ActionDispatch<[action: BudgetActions]> // Codigo de curso react.dispatch<BudgetActions>
}

type BudgetProviderProps = {
    children : ReactNode // Tipado exclusiva para children
}

export const BudgetContext = createContext<BudgetContextProps>({} as BudgetContextProps) // Context permite tener los valores de manera global
/* en parametro de context, al agregarle {} as BudgetContextProps es solamente para quitar el error, indicamos que la funcion debe confiar con lo que le vamos a pasar */

export const BudgetProvider = ({children} : BudgetProviderProps) => { // Definimos children que es un concepto para referirse a la aplicacion
    // Provider es de donde vienen los datos
    const [state, dispatch] = useReducer(BudgetReducer ,InitialState)

    return(
         
        <BudgetContext.Provider
            value={{state, dispatch}} // De esta manera se comunica el context junto con provider, ahora ya podemos tener state y dispatch 
        > {/* De estea manera rodeamos a nuestra aplicacion y poder acceder al state y dipatch */}
            {children}
        </BudgetContext.Provider>
    )
}