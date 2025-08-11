import type { Activity } from "../types"

export type ActivityActions = {
    // Aquí defines el tipo de las acciones que el reducer puede manejar.
    /* En un reducer, las acciones (action) siempre tienen:
        type → indica qué acción quieres realizar */
    type : 'save-activity', // El type describe que es lo que esta susediendo
    payload : { newActivity : Activity }// Payload son los datos que se van agregar o que vamos almacenar

}

type ActivityState ={
    activities : Activity[]
}

export const initialState : ActivityState = {
    /* Este es el estado inicial del reducer.
    Aquí defines con qué datos empieza tu aplicación antes de que pase nada.
    En este caso, comienza con activities como un arreglo vacío. */
    activities : []
}

export const activityReducer = (
    /* state → es el estado actual del reducer.
    Se inicializa con initialState si no hay un estado previo.
    action → es el objeto que dice qué quieres hacer y, si es necesario, con qué datos. */
    state : ActivityState = initialState,
    action : ActivityActions
) => {
    if (action.type === 'save-activity') {
        // Este codigo maneja la logica para actualizar el state

        return { // retorna el estado actualizado
            ...state,
            activities : [...state.activities, action.payload.newActivity] // Hacemos copia de las actividades previas y concatenamos con la nueva informacion ingresada
        }
    }
    return state // La logica del reducer siempre debe tener un return
}