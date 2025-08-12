import type { Activity } from "../types"

export type ActivityActions = {
    // Aquí defines el tipo de las acciones que el reducer puede manejar.
    /* En un reducer, las acciones (action) siempre tienen:
        type → indica qué acción quieres realizar */
    type : 'save-activity', // El type describe que es lo que esta susediendo
    payload : { newActivity : Activity }// Payload son los datos que se van agregar o que vamos almacenar 
} | {type : 'setActiveId', payload: {id: Activity['id']}} | // Agregamos una nueva accions a nuestro reducer, en este caso solo recolectamos el id de la actividad para identificarla y poder editar 
    {type: 'delete-Activity', payload : {id : Activity['id']}}

export type ActivityState = {
    activities : Activity[],
    activeID : string
}

export const initialState : ActivityState = {
    /* Este es el estado inicial del reducer.
    Aquí defines con qué datos empieza tu aplicación antes de que pase nada.
    En este caso, comienza con activities como un arreglo vacío. */
    activities : [],
    activeID : ''
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
        let updatedActivities : Activity[] = []// Se declara como let ya que tendra valores distintos
        if(state.activeID){
            // Estamos editando una actividad
            updatedActivities = state.activities.map(actividad => actividad.id === state.activeID // Si la actividad que seleccionamos es igual a la que se encuentra en        nuestras actividades
                ?   action.payload.newActivity // Actualizamos la actividad
                :   actividad // De lo contrario mantenemos las actividades
            )
        } else{
            //Estamos agregando una nueva actividad
            updatedActivities = [...state.activities, action.payload.newActivity] // Hacemos copia de las actividades previas y concatenamos con la nueva informacion ingresada

        }

        return { // retorna el estado actualizado
            ...state,
            activities : updatedActivities, // Guardamos la informacion
            activeID : '' // Cada que haya una nueva actividad, se reinicia el activeID

        }
    }

    if (action.type === 'setActiveId'){
        return {
            ...state, // Para mantener los registros anteriores
            activeID : action.payload.id // Obtenemos el id de la actividad
        }
    }

    if (action.type === 'delete-Activity') {
        return {
            ...state,
            activities : state.activities.filter(actividad => actividad.id !== action.payload.id)
        }
    }

    return state // La logica del reducer siempre debe tener un return
}