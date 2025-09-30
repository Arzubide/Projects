import { Outlet } from "react-router-dom"


export default function Header() {
    return (
        <>
            <header>
                <div className="">
                    <p>Header</p>
                </div>
            </header>

            <Outlet/>
        </>
    )
}
