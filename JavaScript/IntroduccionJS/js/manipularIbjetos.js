const producto = {
    precio : 55,
    nombre : 'Cereal',
    disponible : false
}

producto.disponible = true //reasignamos un valor de una de las porpiedades del objeto
console.log(producto.disponible)

producto.imagen = 'img.jpg' //Asignamos una nueva propiedad a nuesto objeto inicial desde fuera
console.table(producto)

delete producto.precio //borramos la propiedad precio del producto
console.table(producto)

//Metodos para aplicar a los objetos
Object.freeze(producto) //Este metodo hace que el objeto sea estatico, no se puede modificar desde afuera las propiedades que tiene el objeto

Object.seal(producto) // Este metodo solo te permite editar las propiedades existentes pero no permite añadir o eliminar nuevas propiedades del objeto