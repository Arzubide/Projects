//Selectores

// con querySelector pordemos acceder a elementos de la pagina ya sea por su id, nombre, clase.
const heading = document.querySelector('.heading')//accedemos al elemento con el cual tiene la clase heading
console.log(heading)

//Con querySelectorAll podemso acceder igual que un quierySelector, solo que este te puede retornar mas de un elemento
const enlaces = document.querySelectorAll('.navegacion a') //accedemos a los tipos de tag <a> que contenga la clase navegacion
console.log(enlaces)