import { BrowserRouter,Route,Routes } from "react-router-dom"
import Index from "./Pages"
import Header from "./Layouts/Header"


export default function Approuter() {
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Header/>}>
                        <Route element={<Index/>} path="/" index/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
