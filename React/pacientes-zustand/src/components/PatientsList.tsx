import { usePatientStore } from "../store/store" 
import PatientDetails from "./PatientDetails"

export default function PatientsList() {

    const patient = usePatientStore(state => state.patients) // Accedemos a los pacientes de nuestro store global

    return (
       <div className="md:w-1/2 lg:3-5 md:h-screen overflow-y-scroll">
          {patient.length ? ( // Si contiene algo patients
              <>
                <h2 className="font-black text-3xl text-center">Lista de pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                  Administra tus {' '}
                  <span className="text-indigo-600 font-bold">pacientes y citas</span>
                </p>

                {patient.map((p) => (
                  <PatientDetails
                    key={p.id}
                    paciente={p}
                  />
                ))}
              </>
          ) : (
            <>
              <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
              <p className="text-xl mt-5 mb-10 text-center">
                Comienza agregando pacientes {' '}
                <span className="text-indigo-600 font-bold"> y apareceran aqui</span>
              </p>
            </> 
          )}
       </div>
    )
}
