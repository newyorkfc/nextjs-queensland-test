import { OrderVO } from "app/orders/order/model"

export interface LocationVO {
    id: string|null
    createdAt: string|null
    updatedAt: string|null
    name: string|null
    farmArray: Array<FarmVO>|null
}

export interface FarmVO {
    id: string|null
    createdAt: string|null
    updatedAt: string|null
    name: string|null
    locationId: string|null
    companyId: string|null
    orderArray: Array<OrderVO>|null
}