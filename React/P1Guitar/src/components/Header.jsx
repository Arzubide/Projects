function Header({carro}) {
    // Dentro de la funcion, podemos agregar codigo HTML.

    //State derivado
    const initialValue = 0
    const isEmpty  = () => carro.length === 0
    const cartTotal = () => carro.reduce((total, item) => total + (item.quantity * item.price), initialValue) // Nos permite ir sumando cada valor que tengamos sobre el array que estemos trabajando, en este caso el array es carro

    return (
        // Lo que este dentro de este return, sera lo que se mostrara en pantalla
        
        <> {/* Creamos un fragmento */} 
            <header className="py-5 header">
                <div className="container-xl">
                    <div className="row justify-content-center justify-content-md-between">
                        <div className="col-8 col-md-3">
                            <a href="index.html">
                                <img className="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
                            </a>
                        </div>
                        <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                            <div 
                                className="carrito"
                            >
                                <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                                <div id="carrito" className="bg-white p-3">
                                    { isEmpty() ? ( // Si el carro esta vacio, muestra esto
                                        <p className="text-center">El carrito esta vacio</p>
                                    ) : ( // De lo contrario mostramos esto
                                        <>
                                            <table className="w-100 table">
                                                <thead>
                                                    <tr>
                                                        <th>Imagen</th>
                                                        <th>Nombre</th>
                                                        <th>Precio</th>
                                                        <th>Cantidad</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {carro.map(guitarra => ( //por cada guitarra se mostrara lo siguiente
                                                        <tr>
                                                            <td>
                                                                <img className="img-fluid" src={`../public/img/${guitarra.image}.jpg`} alt="imagen guitarra" />
                                                            </td>
                                                            <td>{guitarra.name}</td>
                                                            <td className="fw-bold">
                                                                    {guitarra.price}
                                                            </td>
                                                            <td className="flex align-items-start gap-4">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-dark"
                                                                >
                                                                    -
                                                                </button>
                                                                    {guitarra.quantity}
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-dark"
                                                                >
                                                                    +
                                                                </button>
                                                            </td>
                                                            <td>
                                                                <button
                                                                    className="btn btn-danger"
                                                                    type="button"
                                                                >
                                                                    X
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    
                                                </tbody>
                                            </table>
                                            <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal()}</span></p>
                                        </>
                                    
                                    )}
                                    
                                    <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>            
        </>
    )
}

export default Header