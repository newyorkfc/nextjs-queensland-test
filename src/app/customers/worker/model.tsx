import { OrderVO } from "app/orders/order/model"
import { ContractVO } from "app/papers/contract/model"

export interface WorkerVO{
    id: string|null
    createdAt: string|null
    updatedAt: string|null
    startDate: string|null
    endDate: string|null
    tax: string|null
    farmNumber: string|null
    memo: string|null
    teamId: string|null
    personId: string|null
    contract: ContractVO|null
    orderArray: Array<OrderVO>|null
}

export interface WorkerViewVO{
    id: string|null
    createdAt: string|null
    updatedAt: string|null
    locationId: string|null
    locationName: string|null
    farmId: string|null
    farmName: string|null
    teamId: string|null
    teamName: string|null
    firstName: string|null
    lastName: string|null
    englishName: string|null
    bsb: string|null
    accountNumber: string|null
    email: string|null
    cellPhone: string|null
    taxFileNumber: string|null
    birthDate: string|null
    gender: string|null
    nationality: string|null
    passportNumber: string|null
    visaGrantNumber: string|null
    fundName: string|null
    memberNumber: string|null
    address: string|null
    startDate: string|null
    endDate: string|null
    tax: string|null
    farmNumber: string|null
    memo: string|null
}