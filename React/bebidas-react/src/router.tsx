import { BrowserRouter, Route, Routes } from "react-router-dom" // Componentes necesarios cada vez que se crea un router
//Importamos las paginas 
import IndexPage from "./pages/IndexPage"
import FavoritesPages from "./pages/FavoritesPages"


export default function AppRouter() {
    // Este comoponente tiene que ser importado desde main
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/" // Ruta que ingresamos para acceder al elemento
                    element ={<IndexPage/>} // Pagina que va a cargar
                />
                <Route path="/favoritos" element ={<FavoritesPages/>}/>
            </Routes>
        </BrowserRouter>
    )
}
