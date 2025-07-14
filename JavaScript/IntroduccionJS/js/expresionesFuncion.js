//function expression, son funciones declaradas como variables, a comparacion de las funciones declaradas como funciones, es que estas se ejecutan conforme se desarrolle el codigo, mientras que las funciones declaradas como funciones, se ejecutan en todo el codigo, son globales dentro del codigo

// resta(5, 3) Marca error

const resta = function(num1 = 0, num2 = 0){
    console.log(num1 - num2)
}
