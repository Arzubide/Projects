import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';


import { useMemo } from "react";
import { formatDate } from "../helpers";
import type { Expense } from "../types";
import AmountDisplay from "./AmountDisplay";
import { categories } from "../data/categories";
import { useBudget } from '../hooks/useBudget';

type ExpenseDetailProps = {
    expense : Expense
}

export default function ExpenseDetail({expense} : ExpenseDetailProps) {
    
    const {dispatch} = useBudget()

    const categoryInfo = useMemo(() => categories.filter(cat => cat.id === expense.category)[0] ,[expense]) // expense.category almacena un string del 1-7
    // agregamos el [0] para traer el contenido de la posicion en lugar de devolverlos todo el arreglo


    // Funciones de swipeable-list
    const leadingActions = () => ( // Funcion que define el comportamiento de izqiuierda a derecha
        <LeadingActions>
            <SwipeAction onClick={() => dispatch({type : 'get-expense-by-id', payload : {id : expense.id}})}>
                Actualizar
            </SwipeAction>
        </LeadingActions>
        );

    const trailingActions = () => ( // Funcion que define el comportamiento de derecha a izquierda
        <TrailingActions>
            <SwipeAction
            destructive={true}
            onClick={() => dispatch({type : 'delete-expense', payload : {id : expense.id}})}
            >
                Eliminar
            </SwipeAction>
        </TrailingActions>
    );

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="shadow-2xl  border-b bg-white border-gray-200 p-10 flex gap-5 w-full">
                    <div>
                        <img src={`/icono_${categoryInfo.icon}.svg`} alt="" className="w-20 space-y-3" />
                    </div>

                    <div className="flex-10"> {/* flex1 toma todo el ancho disponible */}
                        <p className="text-sm font-bold uppercase text-slate-500">{categoryInfo.name}</p>
                        <p>{expense.expenseName}</p>
                        <p className="text-slate-600 text-sm">{formatDate(expense.date!.toString())}</p>
                    </div>

                    <div className="py-5">
                        <AmountDisplay
                        amount={expense.amount}
                    />
                    </div>
                    
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}
