//Destructuring de dos o mas objetos
const producto = {
    precio : 55,
    nombre : 'Cereal',
    disponible : false
}

const cliente = {
    nombre : "Gael",
    premium : true,
    direccion : {
        calle : 'Fernando A. Milpa'
    }
}

const {nombre} = producto
const {nombre: nombreCliente, direccion : {calle}} = cliente //reasignamos el nombre de la propiedad con los dos puntos, accedemos al valor de la propiedad calle del objeto direccion

console.log(nombre)
console.log(nombreCliente, calle) 