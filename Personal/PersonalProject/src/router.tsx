import { BrowserRouter,Route,Routes } from "react-router-dom"
import Index from "./Pages"


export default function Approuter() {
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Index/>} path="/" index/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
