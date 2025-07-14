const string = ['gael', 'jennifer', 'carlos']
const numeros = [1,2,3,4]

//Filter, funciona para los distintos tipos de arreglos (numericos o strings)
const nuevoArreglo = string.filter(function(element) {
    console.log(element)
})

    //filter con el tipo de funcion flecha (arrow function)
    const arroww = numeros.filter(elemento => elemento) //por cada elemento que haya en el arreglo, retornamos el elemento
    console.log(arroww)

//Include
const variable = numeros.includes(5) //metodo que verifica si contiene el elemento
console.log(variable)

//Some - Devuelve si al menos uno cumple la condicion 
const verdad = string.some(cadena => cadena.length > 1) //Si almenos uno de los elementos del arreglo, la longitud es mayor a 1, devuelve true o false
console.log(verdad)

//Find - Devuelve el primer elemento que cumpla alguna condicion 
const numero = numeros.find(numero => numero >0)
console.log(numero)

//Every - Retorna true o false si todos los elementos cumplen la condicion
const falso = numeros.every(numero => numero > 3) 
console.log(falso) //No todos los numeros son mayor a 3

//Reduce - Retorna un acumulado del total
const suma = numeros.reduce((total, elemento) => {
        return total + elemento        
    }, 0 // Inicializamos el total en 0
)
console.log(suma)