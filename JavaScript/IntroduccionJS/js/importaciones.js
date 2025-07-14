/*
Para que un archivo importe funciones de otro modulo, se llama la funcion y el modulo. Una vez hecho esto, en el documento HTML en la parte donde se esta agregando el script se agrega de la siguiente manera
    <script src = 'nombreDocumento' type = 'module'>

Para este ejemplo se creara otro modulo llamado importaciones2.js
*/
import {suma, resta} from './importaciones2.js' //importamos las funciones que queremos del modulo que las tiene
import {suma as FuncionSumar } from './importaciones2.js' //De esta manera le podemos agregar un alias a los nombres de las funciones 

const SUMA = suma(20,5)
console.log(SUMA)

const RESTA = resta(10,2)
console.log(RESTA)

