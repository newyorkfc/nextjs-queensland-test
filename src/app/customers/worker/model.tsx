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