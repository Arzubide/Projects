const producto = {
    precio : 55,
    nombre : 'Cereal',
    disponible : false
}

const cliente = {
    nombre : "Gael",
    premium : true
}

//heredad atribitos de un producto
const carrito = {
    cantidad : 1,
    ...producto //heredamos las propiedades del objeto producto con spread operator (tres puntos)
}
console.log(carrito)

//Juntar dos objetos en uno solo
const NuevoObjeto = {
    producto, //Aplicamos Objet Literal Enhacement
    cliente
}
console.log(NuevoObjeto)


