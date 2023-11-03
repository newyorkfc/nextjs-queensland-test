import { WorkerVO } from "app/customers/worker/model"

export interface TeamVO {
    id: string|null
    createdAt: string|null
    updatedAt: string|null
    name: string|null
    staffId: string|null
    companyId: string|null
    workerArray: Array<WorkerVO>|null
}