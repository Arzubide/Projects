// Linea 2 y 3 sacadas de https://www.npmjs.com/package/react-date-picker
type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Expense = {
    id : string
    expenseName : string
    amount : number
    category : string
    date : Value
}

export type DraftExpense = Omit<Expense, 'id'> // Hacemos la copia de Expense omitiendo el id

export type Category = {
    id : string
    name : string
    icon : string
}