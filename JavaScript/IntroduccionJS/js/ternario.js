const saldo = 0
const tarjeta = true
const deuda = 600
const autenticado = true
// El signo ? es equivalente a un if y el signo de : es equivalente a un else
//Sintaxis del ternario (condicion) ? se cumple : no se cumple

autenticado === true ? console.log('usuario autenticado') : console.log('usuario sin autenticar')

// Ternario anidado
saldo > deuda ? console.log('si puedes pagar') : tarjeta===true ? console.log('Puedes pagar con tarjeta') : console.log('no puedes pagar')