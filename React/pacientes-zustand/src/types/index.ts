export type Patientdata = {
    id : string
    name : string
    caretaker : string
    email : string
    date : Date
    symptoms : string
}

export type draftPatientData = Omit<Patientdata, 'id'>