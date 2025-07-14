//Un objeto es una coleccion de propiedades, los objetos se definen con '{}'

let producto = {
    nombre : 'Carro', //llave y valor
    precio : 57,
    disponible : false
}

console.log(producto)
console.table(producto) //crea una tabla del objeto y sus propiedades
console.log(producto.disponible) //accedemos a los atributos del producto

//Destruction, extraemos una propiedad del objeto y generamos una variable
const {nombre, precio, disponible} = producto
console.log(nombre, disponible, precio) 

//Objet Literal Enhacement, esto solo funciona cuando las variables se llaman igual que las llaves del objeto

let autenticacion = true
let nombreUser = 'Gael'

const NuevoObjeto = {
    autenticacion,
    nombreUser
} //Creamos un objeto partiendo de variables ya creadas, solo porque tienen el mismo nombre

console.table(NuevoObjeto)