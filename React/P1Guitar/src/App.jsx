import { useState, useEffect } from 'react'
import Header from './components/Header' //Importamos el componente para poder utilizarlo
import { Guitarras } from './components/Guitarras'

function App() {

    // State
    const [auth, setAuth] = useState(false)
    // Effect
    useEffect (() => {
        console.log('Effect listo')
    }, []) // Si en la parte de dependencias agregamos un arreglo vacio, indicamos que no tiene dependencias, por tanto se ejecuta en cuanto arraque la pagina

    useEffect (() => {
        console.log('autenticado')
    }, [auth]) //Si dentro de las corchetes tiene una variable, este se ejecutara cuando menos una vez reciba el valor de auth, depende de la variable para ejecutarse


  return (
      <>
      {/* Aqui renderizamos el componente dentro de este componente */}
      
        {/* 
            Debido a que JSX tiene palabras reservadas, como lo es class, no podemos utilizar esa palabra dentro del codigo HTML, por lo que tenemos que utilizar las palabras a resevadas de React. En esta caso para darle una calse a un elemento HTML en React, se utiliza className para evitar utilizar la palabra reservada class 
            
            Correcto: <header className="py-5 header">
            Incorrecto <header class="py-5 header">
        
        */}
        
        <Header/>

        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5">
                <Guitarras/>
            </div>
        </main>


        <footer className="bg-dark mt-5 py-5">
            <div className="container-xl">
                <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
            </div>
        </footer>
      </>
  )
}

export default App
