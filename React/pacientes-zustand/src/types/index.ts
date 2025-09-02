export type PatientData = {
    id : string
    name : string
    caretaker : string
    email : string
    date : Date
    symptoms : string
}

export type draftPatientData = Omit<PatientData, 'id'>