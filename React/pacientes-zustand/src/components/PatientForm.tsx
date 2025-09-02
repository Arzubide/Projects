import { useForm } from 'react-hook-form'
import Error from './Error'
import type { draftPatientData } from '../types'

export default function PatientForm() {
  
    const {register, handleSubmit, formState : {errors}} = useForm<draftPatientData>() 
    // register = This method allows you to register an input or select element and apply validation rules to React Hook Form
    // handleSubmit = This function will receive the form data if form validation is successful.
    // formState : {errors} = accedemos solamente a los errores y podemos mostrarlos
    // <draftPatientData> = Se agrega para que los datos coincidan con handleSubmit 


    const registerPatient = (data : draftPatientData) => {
        // Si todas las validaciones pasan, se ejecuta esta funcion
        console.log(data)
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                noValidate
                onSubmit={handleSubmit(registerPatient)}
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Paciente 
                    </label>
                    <input  
                        id="name"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="Nombre del Paciente"
                        {...register('name', { // Forma de agregar useForm a un campo de nuestro formulario
                            // Dentro de los corchetes va los requerimientos que se solicita
                            required : 'El nombre del paciente es obligatorio',
                            minLength : {
                                value : 8,
                                message : 'Minimo 8 caracteres'
                            }
                        })}
                    />
                    {errors.name && ( // Mostramos el error unicamente cuando exista un error
                        <Error>
                            {errors.name?.message} 
                        </Error>
                    )}

                </div>

                <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                        Propietario 
                    </label>
                    <input  
                        id="caretaker"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="Nombre del Propietario" 
                        {...register('caretaker', { // Forma de agregar useForm a un campo de nuestro formulario
                            // Dentro de los corchetes va los requerimientos que se solicita
                            required : 'El nombre del propietario es obligatorio',
                            
                        })}
                    />

                    {errors.caretaker && ( // Mostramos el error unicamente cuando exista un error accediento al nombre del error que le asignamos
                        <Error>
                            {errors.caretaker?.message } 
                        </Error>
                    )}
                </div>

                <div className="mb-5">
                <label htmlFor="email" className="text-sm uppercase font-bold">
                    Email 
                </label>
                <input  
                    id="email"
                    className="w-full p-3  border border-gray-100"  
                    type="email" 
                    placeholder="Email de Registro"
                    {...register("email", {
                        required: "El Email es Obligatorio",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Email No Válido'
                        }
                    })} 
                />

                {errors.email && (
                    <Error>
                        {errors.email.message as string}
                    </Error>
                )}
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Fecha Alta 
                    </label>
                    <input  
                        id="date"
                        className="w-full p-3  border border-gray-100"  
                        type="date" 
                        {...register('date', { // Forma de agregar useForm a un campo de nuestro formulario
                            // Dentro de los corchetes va los requerimientos que se solicita
                            required : 'La fecha es obligatorio',
                            
                        })}
                    />
                    {errors.date && (
                        <Error>
                            {errors.date.message}
                        </Error>
                    )}
                </div>
                
                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                    Síntomas 
                    </label>
                    <textarea  
                        id="symptoms"
                        className="w-full p-3  border border-gray-100"  
                        placeholder="Síntomas del paciente"
                        {...register('symptoms', { // Forma de agregar useForm a un campo de nuestro formulario
                            // Dentro de los corchetes va los requerimientos que se solicita
                            required : 'Los sintomas son obligatorios',
                            minLength : {
                                value : 10,
                                message : 'Minimo 10 caracteres'
                            }
                            
                        })}
                    ></textarea>

                    {errors.symptoms && ( // Esto mostrará el mensaje de error tanto si falta el campo (required) como si no cumple el minLength.
                        <Error>
                            {errors.symptoms.message}
                        </Error>
                    )}

                    
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value='Guardar Paciente'
                />
            </form> 
        </div>
    )
}