export type menuItem = {
    id : number
    name : string
    price : number
}

export type orderItem = menuItem & {
    quantity : number
}