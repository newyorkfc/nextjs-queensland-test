import { WorkerVO } from "../worker/model"

export interface PersonVO {
    id: string|null
    createdAt: string|null
    updatedAt: string|null
    title: string|null
    firstName: string|null
    lastName:   string|null
    englishName: string|null
    gender: string|null
    birthDate: string|null
    passport: PassportVO|null
    workerArray: Array<WorkerVO>|null
}

export interface PassportVO {
    id: string|null
    visaGrantNumber: string|null
    visaExpireDate: string|null
    nationality: string|null
    passportNumber: string|null
    personId: string|null
}