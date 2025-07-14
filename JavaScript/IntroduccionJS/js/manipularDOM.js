//Manipular elementos HTML con JS
const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

//Modificar el contenido de un elemento HTML
heading.textContent = 'Contenido modificado'

//Para modificar elementos que tenemos con querySelectorAll
/*Se seleccionan los elementos como si fueron una lista, debido a que se colocan dentro de una lista */

enlaces[0].textContent = 'Enlace modificado' //accedemos al primer enlace y modificamos su contenido