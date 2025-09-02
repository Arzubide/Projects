import {create} from 'zustand'
import type { draftPatientData, PatientData } from '../types'

// Zustand es una librería para gestión de estado global en aplicaciones React. Permite compartir y actualizar datos entre componentes sin necesidad de pasar props manualmente.

type PatientSate ={
    patients : PatientData[]
    addPatient : (data : draftPatientData) => void
}

export const usePatientStore = create<PatientSate>(()=>({
    // usePatientStore crea un estado global con la lista de pacientes (patients).
    // Cualquier componente puede leer o modificar ese estado usando el hook usePatientStore.
    patients : [],
    addPatient : (data)=>{
        console.log(data)
    }

})) 