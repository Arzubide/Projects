//
/*
|| Logical OR (Al menos una se cumple) 
&& Logical AND (Todas las condiciones se cumplen)
*/

const saldo = 900
const tarjeta = true
const deuda = 600

if (saldo >= deuda && tarjeta === true) {
    console.log('Pago exitoso')
}else{
    console.log('No puedes pagar')
}

