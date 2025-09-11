import {create} from 'zustand'
import type { draftPatientData, PatientData } from '../types'
import {v4 as uidv4} from 'uuid'

// Zustand es una librería para gestión de estado global en aplicaciones React. Permite compartir y actualizar datos entre componentes sin necesidad de pasar props manualmente.

type PatientSate ={
    patients : PatientData[]
    addPatient : (data : draftPatientData) => void
}

const createPatient = (patient : draftPatientData) : PatientData => { // Recibe un paciente de tipo draft y retorna un paciente 
    return { // Retornamos un paciente pero ahora con un id
        ...patient, id: uidv4()
    }


}

export const usePatientStore = create<PatientSate>((set)=>({ // SET permite actualizar el estado global
    // usePatientStore crea un estado global con la lista de pacientes (patients).
    // Cualquier componente puede leer o modificar ese estado usando el hook usePatientStore.
    patients : [], // Valor incial del estado global
    addPatient : (data)=>{
        const newPatien = createPatient(data) // le pasamos el paciente a la funcion y guradamos el valor en newPatient
        set((state)=>({ // STATE representa el estado actual, en este caso accedemos al estado de patients que es nuestro valor iniciado
            patients : [...state.patients, newPatien] // seteamos la copia de los pacientes y le agregamos la nueva informacion del formulario
        }))
    }

})) 