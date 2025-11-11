import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../store/useAppStore"; // Contiene las 

export default function Header() {
    
    const userLocation = useLocation() // Esta funcion nos devuelve propiedades del usuario para saber en donde se encuentra navegando

    const isHome = useMemo(()=> userLocation.pathname === '/',[userLocation]) // Dectamos si el usuario esta en inicio

    // 1. Obtener la función para cargar categorías
    const fetchCategories = useAppStore((state) => state.fetchCategories) // Traremos las categorias desde el store de la 11 a la 14
    // 3. Llamar a la función cuando el componente se monta
    useEffect(()=>{
        fetchCategories()// Hace la petición a la API
    },[])

    // 2. Obtener el array de categorías
    const categories = useAppStore((c)=> c.categories.drinks)
    

    //Almacenamos los datos ingresados para la busqueda
    const [searchFilter,setSeacrhFilter] = useState({
        ingredient : '',
        category: ''
    })

    // Funcion que setea los valores de busqueda en nuestro state
    const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>)=> {
        setSeacrhFilter({
            ...searchFilter,
            [e.target.name] : e.target.value
            // e.target.name    ← Obtiene el atributo 'name' del elemento
            // e.target.value   ← Obtiene el valor actual del elemento
        })
    }

    //Funcion para enviar el formulario
    const SearchFilter = useAppStore((state)=>state.searchRecipes) // Funcion que activa el estado de searchFilter

    const notification = useAppStore(state => state.showNotification)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        //Validacion de datos
        if (Object.values(searchFilter).includes('')) {
            return notification({
                text : 'Todos los campos son obligatorios',
                error : true
            })
        }
        //Consultar las recetas
        SearchFilter(searchFilter) // Activamos el estado de searchFilter y le pasamos lo que tenemos en nuestro estado

    }

    return (
        <header className={isHome ? 'headerImage' : 'bg-slate-800'}>
            <div className="mx-auto container px-5 py-16">

                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="imagen" />
                    </div>
                    
                    <nav className="flex gap-2">
                        {/*Usando Link para el redireccionamiento*/}
                        {/* <Link to={"/"} className="text-white font-bold uppercase">  
                            Incio
                        </Link>
                        <Link to={"/favoritos"} className="text-white font-bold uppercase">
                            Favoritos
                        </Link> */}

                        {/* Usando navegacion con NavLink, la diferencia es la propiedad de agregar callback en clasname */}
                        <NavLink
                            to={"/"}
                            className={({isActive}) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold' } 
                        >
                            Inico
                        </NavLink>

                        <NavLink
                            to={"/favoritos"}
                            className={({isActive}) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold' }
                        >
                            Favoritos
                        </NavLink>
                    </nav>
                </div>

                {isHome && ( // El siguiente codigo solo se muestra si el usuario esta en el inico
                    <form className="my-12 p-5 space-y-2 rounded-2xl md:w-1/2 bg-orange-400 " onSubmit={handleSubmit}>
                        
                        <div className="space-y-2">
                            <label htmlFor="ingredient" className="block text-white uppercase font-extrabold text-lg">Nombre o ingredientes</label>
                            <input type="text" name="ingredient" id="ingredient" className="p-3 w-full rounded-lg focus:outline-none bg-white" placeholder="Nombre o ingrediente. Ej. Vodka, Tequila, Cafe, etc"
                            onChange={handleChange}/>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="category" className="block text-white uppercase font-extrabold text-lg">Categoria</label>
                            <select 
                                name="category" 
                                id="category" 
                                className="p-3 w-full rounded-lg focus:outline-none bg-white" 
                                onChange={handleChange}
                            >
                                <option value="">--- Seleccione ---</option>
                                {categories.map((categorie)=>(
                                    <option key={categorie.strCategory} value={categorie.strCategory}>
                                        {categorie.strCategory}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <input type="submit" name="Buscar" id="Buscar" className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full rounded-2xl p-2 my-2" />
                    </form>
                )}

            </div>
        </header>
    )
}
