export function Guitarras({guitarra}) { // prop

    const clcik = (objeto)=>{ 
        //Creamos la fucnion que recibe onClick
        console.log('Click', objeto)
    }
    //Usamos codigo JS junto con HTML
    return (
        <>
            <div className="col-md-6 col-lg-4 my-4 row align-items-center">
                    <div className="col-4">
                        <img className="img-fluid" src={`./public/img/${guitarra.image}.jpg`} alt="imagen guitarra" /> {/* usamos JS */}
                    </div>
                    <div className="col-8">
                        <h3 className="text-black fs-4 fw-bold text-uppercase">{guitarra.name}</h3>
                        <p>{guitarra.description}</p>
                        <p className="fw-black text-primary fs-3">${guitarra.price}</p> {/* accedemos a la base de datos del prop, y extraemos el valor de cada elemento */}
                        <button 
                            type="button"
                            className="btn btn-dark w-100"
                            onClick={() => clcik(guitarra)} //Para evitar llamar la funcion al instante, le damos el formato en un arrow function. obtenemos el obejeto guitarra desde aqui y le pasamos el id a la funcion antes del return
                        >Agregar al Carrito</button>
                    </div>
                </div>
        </>
    )

}