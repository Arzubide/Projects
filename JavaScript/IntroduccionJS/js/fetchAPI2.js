//Fetch API con Async Await and try cathc
/*
En este caso, con async await necesitas una funcion asincrona (async) estrictamente
*/

const url = 'https://jsonplaceholder.typicode.com/posts' //url que contiene datos de usuarios
const url2 = 'https://jsonplaceholder.typicode.com/comments'
const url3 = 'https://jsonplaceholder.typicode.com/photos'

async function obtenerDatos() {
    //Debido a que async await no puedes utilizar como tal .cath, se utiliza trycatch
    try {
        const respuesta = await fetch(url) //con await esperamos a que haga la conexion
        if (!respuesta.ok) {//Si el estado de respuesta es distinto de OK
            console.log('Hubor un error')
        }
        const datos = await respuesta.json() //Convertimos los datos a Json
        console.log(datos)
    } catch (error) {
        console.log(error.message) //Mostramos el error
    }
}
// obtenerDatos()



//Async Await para ejecutar distintas URL al mismo tiempo
async function VariasURLS() {
    try {
        const inicio = performance.now()//Funcion para medir el rendimiento de tu funcion
        const [respuesta, respuesta2, respuesta3] = await Promise.all([fetch(url), fetch(url2), fetch(url3)]) //Aqui guardaremos el resultado de cada una de las urls 
        const [datos, datos2, datos3] = await Promise.all([respuesta.json(), respuesta2.json(), respuesta3.json()])//convertimos todas las respuestas a .json

        console.log(datos)
        console.log(datos2)
        console.log(datos3)
        const fin = performance.now()//Termina la medicion de rendimiento
        console.log(`Respuesta ${fin - inicio}Ms`)
    } catch (error) {
        
    }
}

VariasURLS()
