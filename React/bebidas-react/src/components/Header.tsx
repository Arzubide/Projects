import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-slate-800">
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="imagen" />
                    </div>
                    
                    <nav className="flex gap-2">
                        {/*to direccion definida en router.tsx*/}
                        <Link to={"/"} className="text-white font-bold uppercase">  
                            Incio
                        </Link>
                        <Link to={"/favoritos"} className="text-white font-bold uppercase">
                            Favoritos
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
