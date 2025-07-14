/*
Para agregar cualquier tipo de evento se utiliza addEventListener solo para los que son de tipo querySelector
*/

//Clicks
const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

heading.addEventListener('click', function() {
    heading.textContent = 'Nuevo heading al dar click'
}) //el evento se llama click, una vez ocurra ese evento se ejecuta la funcion definida

//Para agregar un evento a un querySelectorAll es necesario un foreach para poder realizar la accion sobre cada uno de los elemetos
enlaces.forEach(enlace => {
    //por cada evento haremos lo siguiente
    enlace.addEventListener('click', function(evento) {
        evento.preventDefault() //Le quitamos el comportamiento que tiene por default al enlace con preventDefault
        enlace.textContent = 'diste click'
    })
})

//Inputs
const inputNombre =document.querySelector('#nombre')
inputNombre.addEventListener('input', function(evento) {//detecta cuando el usuario esta escribiendo en un input
    console.log('escribiendo') //Si se activa el evento en terminal mostramos, escribiendo
    
    setTimeout(() => {
        console.clear() 
    }, 2000); //despues que deje de escribir por 2 segundos, se borra la terminal
})


const inputPassword = document.querySelector('#password')
inputPassword.addEventListener('input', function(evento) {
    inputPassword.type = 'text' //cambiamos el tipo de input
    
    setTimeout(() => {
        inputPassword.type = 'password' //lo volvemos password despues de .8s con fin de que sea mas interactivo
    }, 800);
})


//submit
// const formulario = document.querySelector('#formulario') //tenemos que acceder al formulario en general
// formulario.addEventListener('submit', function(evento) {
//     evento.preventDefault()

//     const nombreIngresado = document.querySelector('#nombre').value //obtenemos el valor del input con id nombre
//     const passwordIngresada = document.querySelector('#password').value //obtenemos el valor del input con id password
// })

// Mostrar elementos en pantalla y eliminar elemento del codigo HTML
const formulario = document.querySelector('#formulario') 
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault()
    
    const nombreIngresado = document.querySelector('#nombre').value //obtenemos el valor del input con id nombre
    const passwordIngresada = document.querySelector('#password').value //obtenemos el valor del input con id password

    // Prevenir nuevas alertas
    const AlertaPrevia = document.querySelector('.clase1') // Si se repite una nueva alerta de la que ya esta creada
    AlertaPrevia?.remove() // Si existe remuve el elemento
    

    const elemento = document.createElement('DIV') // Creamos un elemento de tipo DIV con codigo js
    // Forma de agregar clases a un elemento creado desde codigo
    elemento.classList.add('clase1', 'clase2', 'clase3')

    /* Para mostrar ese elemento en la pantalla es necesario agregarlo dentro de otro elemento, como en este caso deseamos mostrarlo en el formulario, entonces lo agregaremos como hijo del formulario. Esto se logra con la funcion appendchild() */

    if (nombreIngresado === '' || passwordIngresada === '') {
        elemento.textContent = 'Todos los campos deben ser rellenados'
    }else{
        elemento.textContent = 'Todos los campos estan bien'
    }

    formulario.appendChild(elemento) // Agregamos el elemento creado al formulario y lo mostramos dependiendo en que caso caiga

    // Eliminar codigo de HTML

    setTimeout(() => {
        elemento.remove()
    }, 3000); // Despues de 3 segundos borramos el elemento que creamos
})


