import type { StateCreator } from "zustand"

type Notification = {
    text : string
    error: boolean
    show: boolean
}

export type notificationSliceType = {
    notification : Notification
}



export const createNotificationSlice : StateCreator<notificationSliceType> = (set,get) => ({
    notification: {
        text : '',
        error: false,
        show: false
    }
})