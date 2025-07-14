//estas funciones se declaran de la siguiente manera solo si tienen una linea de codigo dentro de la funcion 
const multiplicar = (num1,num2) => console.log(num1 * num2)

multiplicar(2,4)

//Si tienen mas de una line de codigo se declaran de la siguiente manera
const division = (num1, num2) => {
    const resultado = num1 / num2
    console.log(resultado)
}

division(10,2)