import type { StateCreator } from "zustand"

type Notification = {
    texto : string
    error: boolean
    show: boolean
}

export type notificationSliceType = {
    notification : Notification
}



export const createNotificationSlice : StateCreator<notificationSliceType> = (set,get) => ({
    notification: {} as Notification
})