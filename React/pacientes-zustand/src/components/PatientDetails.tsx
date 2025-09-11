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
        </div>
  )
}
