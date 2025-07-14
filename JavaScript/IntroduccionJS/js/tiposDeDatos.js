//undefined
let nombre
console.log(typeof nombre) //agregando typeof seguido de una variable sabremos el tipo de dato que es la variable

//Strings
let apellido = 'Arzubide'
console.log(typeof apellido)


//NO HAY DIFERENCIA EN EL TIPO DE DATO ENTRE ENTEROS Y FLOTANTES
//Numero entero
let numero = 5
console.log(typeof numero)
//Numero float
let float = 5.2
console.log(typeof float)

//boolean
let Tfalse = false
let Ttrue = true
console.log(typeof Tfalse, typeof Ttrue)

//Null require que se asigne
let descuento = null
console.log(typeof descuento)

//Symbol, Cada symbol es unico, aunque tengan un valor igual, cada uno es unico
const symbol1 = Symbol(50)
const symbol2 = Symbol(50)
//aunque aparentemente sean iguales, son disntintos
