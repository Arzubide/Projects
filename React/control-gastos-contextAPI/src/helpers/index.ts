export function formatCurrency(amount : number) { // Funcion para darle formato a las cantitades mostradas en pantalla
    return new Intl.NumberFormat('en-US', {style:'currency' , currency: 'USD'}).format(amount)
}