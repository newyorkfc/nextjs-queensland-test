import { CompanyVO } from "../company/model"
import { TeamVO } from "../team/model"

export interface StaffVO {
    id: string|null
    createdAt: string|null
    updatedAt: string|null
    level: string|null
    name: string|null
    password: string|null
    companyArray: Array<CompanyVO>|null
    teamArray: Array<TeamVO>|null
}