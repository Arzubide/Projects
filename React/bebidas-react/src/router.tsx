import { BrowserRouter, Route, Routes } from "react-router-dom" // Componentes necesarios cada vez que se crea un router
//Importamos las paginas 
import IndexPage from "./pages/IndexPage"
import FavoritesPages from "./pages/FavoritesPages"
import Layout from "./layouts/Layout"


export default function AppRouter() {
    // Este comoponente tiene que ser importado desde main
    return (
        <BrowserRouter>
            <Routes>
                {/* Importamos componente que tienen en comun todas las paginas, tiene que ser de apertura y cierre para agrupar a las rutas que lo tiene en comun*/}
                <Route element={<Layout/>}>
                    <Route
                        path="/" // Ruta que ingresamos para acceder al elemento
                        element ={<IndexPage/>} // Pagina que va a cargar
                        index // Indicamos que esta ruta es la pagina principal
                    />
                    <Route path="/favoritos" element ={<FavoritesPages/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}
