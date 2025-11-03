import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Modal from "../components/Modal";
import { useEffect } from "react";
import { useAppStore } from "../store/useAppStore";

// Layout creado para mostrar componentes que tengan en comun paginas
export default function Layout() {

    const loadFromStoragee = useAppStore((state)=>state.loadFromStorage) // Traemos los datos del localstorage
    useEffect(()=>{loadFromStoragee()},[]) //Cada vez qu es actiulice se estara cambiando

    return (
        <>
            <Header/>
            <main className="container mx-auto py-16">
                <Outlet/> {/*Se agrega Outlet para tambien poder rederizar lo que tenga en las demas paginas aparte del header en este caso */}
            </main>

            <Modal/>
        </>
    )
}
