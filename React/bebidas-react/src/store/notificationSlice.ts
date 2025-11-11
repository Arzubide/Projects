import type { StateCreator } from "zustand"
import type { favoriteSliceType } from "./favoritesSlice"

type Notification = {
    text : string
    error: boolean
    show: boolean
}

export type notificationSliceType = {
    notification : Notification
    showNotification : (payload: Pick<Notification, "text" | "error">) => void
    closeNotification : () => void
}


export const createNotificationSlice : StateCreator<notificationSliceType &  favoriteSliceType, [], [], notificationSliceType> = (set,get) => ({
    notification: {
        text : '',
        error: false,
        show: false
    },
    showNotification : (payload) => {
        set({
            notification : {
                text : payload.text,
                error: payload.error,
                show: true
            }
        })
        setTimeout(() => {
            get().closeNotification() // Despues de cierto tiempo se cerrara la notificacion
        }, 3500);
    },
    closeNotification : () => {
        set({
            notification : {
                text : '',
                error : false,
                show: false
            }
        })
    }
    
})