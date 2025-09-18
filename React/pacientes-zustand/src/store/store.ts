import {create} from 'zustand'
import type { draftPatientData, PatientData } from '../types'
import {v4 as uidv4} from 'uuid'

// Zustand es una librería para gestión de estado global en aplicaciones React. Permite compartir y actualizar datos entre componentes sin necesidad de pasar props manualmente.

type PatientSate ={
    patients : PatientData[]
    activeId : PatientData['id']
    addPatient : (data : draftPatientData) => void
    deletePatient : (id : PatientData['id']) => void
    getPatientbyId : (id : PatientData['id']) => void
    updatePatient : (data : draftPatientData) => void
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
    activeId : '',
    addPatient : (data)=>{
        const newPatien = createPatient(data) // le pasamos el paciente a la funcion y guradamos el valor en newPatient
        set((state)=>({ // STATE representa el estado actual, en este caso accedemos al estado de patients que es nuestro valor iniciado
            patients : [...state.patients, newPatien] // seteamos la copia de los pacientes y le agregamos la nueva informacion del formulario
        }))
    },
    deletePatient : (id) => {
        set((state) => ({
            patients : state.patients.filter( patient => patient.id !== id) // Accedemos la lista de pacientes y retornamos los pacientes que sean diferentes del ID a eliminar
        }))
    },
    getPatientbyId: (id) => {
        set(()=>({
            activeId : id // Seteamos el id que obtivimos en el estado global
        }))
    },
    updatePatient: (data) => {
        set((state) => ({ // State accedemos al estado actual que se declara, en este caso nuestro estado inicial es PatientSate, y state hace referencia a PatientSate
            // Actualiza el paciente cuyo id coincide con activeId, reemplazando sus datos con los nuevos (data)
            patients: state.patients.map(patient =>
                patient.id === state.activeId
                    ? { id: state.activeId, ...data }
                    : patient
            ),
            activeId: '' // Formateamos activeId
        }))
    }
})) 