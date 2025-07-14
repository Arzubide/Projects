const numeros = [20,30,40]
console.log(numeros[0])

//Modificar elementos de los arreglos

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']
//Remplazar el elemento de un arreglo
tecnologias[4] = 'Nest.js' // Este metodo no sirve para React, es de tipo modificador
    //Para solucionar esto se utiliza map sirve para acceder a los elementos del arreglo o modificar
    const mapp = tecnologias.map(function(elemento){
        //La funcion accede a cada uno de los elemetos del arreglo
        if (elemento == 'Node.js'){
            return 'Nest.Js' // Si encuentra Node.js, lo cambia por Nest.js
        }//Como map accede a cada uno de los elemetos, tenemos que agregar la condicion que retorne los demas elementos si modificar
        else{
            return elemento
        }
        
    })
console.log(mapp)

//Agregar un elemento a un array hasta el final
tecnologias.push('Django') //Este metodo no sirve para React ya que es metodo de tipo "modificador" 
    //Solucion al problema anterior
    const AagregarVariable = [...tecnologias, 'django.py'] // Compiamos todo el arreglo anterior y le añadimos la variable que le deseamos agregar
    console.log(AagregarVariable)

//Para eliminar el primer elemento del array
tecnologias.shift() //Mismo caso que el anterir, modifica el arreglo inicial y no es recomendable en react
    //solucion
    const tecnologias2 = tecnologias.filter(function(elemento) {//fileter ayuda a sacar o mantener elementos con base a cierta condicion 
        //la funcion accede a cada elemento del arreglo
        if (elemento !== 'HTML') {
            return elemento //retornamos los elementos que no sean HTML
        }
    })

console.log(tecnologias)


//Destructorin en arreglos, crear una variable para cada uno de los elementos del arreglo
/*
    En este caso el destructoring de arreglos, las variables que creas se emparejan con la posicon correspondiente del arreglo
*/
const [posicion0, posicion1, posicion2 ] = tecnologias
console.log(posicion2)

//Iteracion de arreglos
//Iterador dinamico utilzando for
for (let i = 0; i < tecnologias.length; i++) {
    const element = tecnologias[i];
    console.log(element)
}

//Utilizando forEach
/* 
    forEach se repite solamente se repite dependiendo de la cantidad del arreglo
*/
tecnologias.forEach(function(elemento){
    console.log(elemento)
})

//Map
/*
    Map hace casi lo mismo que forEach, la diferencia es que map crea un nuevo arreglo y funciona dependiendo de la funcion o condicion que tenga
*/

tecnologias.map(function(elemento){
    console.log(elemento)
})