//Fetch API con Promises
/*
Fetch API proporciona una interfaz para recuperar recursos, obtener datos a de servidores o de APIs, con fetch() se pueden obtener los datos desde una URL, como si accedieras a la URL y procesarlos desde el codigo

Fragmentos importantes de la sintaxis Promise
fetch() hace al peticion HTTP
.then() espera la respuesta
.cath() captura errores

https://jsonplaceholder.typicode.com/
*/

const url = 'https://jsonplaceholder.typicode.com/postsx' //url que contiene datos de usuarios

fetch(url)
    .then((respuesta) => respuesta.json()) //Si obtenemos los datos de la url accedemos a este primer .then, que en este caso los datos obtenidos de URL los obtenemos como JSON
    .then((datos) => {
        console.log(datos)
    }) //una vez que tenemos los datos, accedemos a ellos
    .catch((error => {
        console.log('Error',error)
    })) //Solo se accede a este catch cuando hay problema de red