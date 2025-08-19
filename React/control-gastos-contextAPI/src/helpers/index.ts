
export function formatCurrency(amount : number) { // Funcion para darle formato a las cantitades mostradas en pantalla
    return new Intl.NumberFormat('en-US', {style:'currency' , currency: 'USD'}).format(amount)
}

export function formatDate(date : string) : string {
    const dateObject = new Date(date)
    const options : Intl.DateTimeFormatOptions = {
        weekday : 'long',
        year : 'numeric',
        month : 'long',
        day : 'numeric',
    }

    return new Intl.DateTimeFormat('es-ES', options).format(dateObject)

}