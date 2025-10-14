import { useMemo } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
    
    const userLocation = useLocation() // Esta funcion nos devuelve propiedades del usuario para saber en donde se encuentra navegando

    const isHome = useMemo(()=> userLocation.pathname === '/',[userLocation]) // Dectamos si el usuario esta en inicio

    return (
        <header className="bg-slate-800">
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
                    <form className="my-12 p-5 space-y-2 rounded-2xl md:w-1/2 bg-orange-400 ">
                        
                        <div className="space-y-2">
                            <label htmlFor="ingredient" className="block text-white uppercase font-extrabold text-lg">Nombre o ingredientes</label>
                            <input type="text" name="ingredient" id="ingredient" className="p-3 w-full rounded-lg focus:outline-none bg-white" placeholder="Nombre o ingrediente. Ej. Vodka, Tequila, Cafe, etc"/>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="ingredient" className="block text-white uppercase font-extrabold text-lg">Categoria</label>
                            <select 
                                name="ingredient" 
                                id="ingredient" 
                                className="p-3 w-full rounded-lg focus:outline-none bg-white" 
                            >
                                <option value="">--- Seleccione ---</option>
                                {/* Se alimentara las opciones desde la API asociada */}
                            </select>
                        </div>
                        <input type="submit" name="Buscar" id="Buscar" className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full rounded-2xl p-2 my-2" />
                    </form>
                )}

            </div>
        </header>
    )
}
