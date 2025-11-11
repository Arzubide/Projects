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
}


export const createNotificationSlice : StateCreator<notificationSliceType &  favoriteSliceType, [], [], notificationSliceType> = (set) => ({
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
    }
})