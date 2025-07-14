//Optional chaining se denota con ?
/* Se usa principalmente para verificar si existen atributos dentro de un objeto, en dado caso que no existan omite el codigo pero si existen esas propiedades, ejecuta el codigo */

const alumo = {
    nomnre : 'Gael',
    edad : 18,
    aprobado : true,
    // examenes : {
    //     examen1 : 10
    // }
}

console.log(alumo.examenes?.examen1) //Si existe la propiedad de examenes del objeto alumno, la imprimira, de lo contrario retorna undefined
console.log('Alumno despues del codigo')

//Nollish coolescing operator se denota con ??
/*
Este operador funciona para retornar el valor de la derecha en dado caso que el valor de la izquierda sea nulo, si el valor de la izquierda no es nulo, entonces retorna el valor de la izquierda
*/
const pagina1 = null ?? 10
console.log(pagina1)

const pagina2 = 50 ?? 1
console.log(pagina2)