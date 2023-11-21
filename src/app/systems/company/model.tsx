import { BoardVO } from "app/boards/board/model"
import { FarmVO } from "app/customers/farm/model"
import { TeamVO } from "../team/model"

export interface CompanyVO {
    id: string|null
    createdAt: string|null
    updatedAt: string|null
    name: string|null
    address: string|null
    staffId: string|null
    boardArray: Array<BoardVO>|null
    farmArray: Array<FarmVO>|null
    teamArray: Array<TeamVO>|null
}