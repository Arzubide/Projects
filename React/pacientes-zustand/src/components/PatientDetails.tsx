import type { PatientData } from "../types"
import PatientDetailItem from "./PatientDetailItem"

type PatientDetailsProps = {
    paciente : PatientData
}

export default function PatientDetails({paciente} : PatientDetailsProps) {
  return (
        <div className="mx-5 my-5 px-5 py-5 bg-white shadow-2xl rounded-2xl">
            <PatientDetailItem
                label={'ID'}
                data={paciente.id}
            />

            <PatientDetailItem
                label={'Nombre'}
                data={paciente.name}
            />

            <PatientDetailItem
                label={'Propietario'}
                data={paciente.caretaker}
            />
            
            <PatientDetailItem
                label={'Email'}
                data={paciente.email}
            />

            <PatientDetailItem
                label={'Fecha alta'}
                data={paciente.date.toString()}
            />

            <PatientDetailItem
                label={'Sintomas'}
                data={paciente.symptoms}
            />

            <div className="flex justify-between gap-3 mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-2xl"
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-2xl"
                >
                    Eliminar
                </button>
            </div>
        </div>
  )
}
