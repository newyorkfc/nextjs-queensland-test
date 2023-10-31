import { TimeStamp } from "./common/TimeStamp";

export interface Company extends TimeStamp {
    id: number|null;
    name: string|null;
    address: string|null;
    staff: object|null; // TODO
    boardArray: Array<any>|null; // TODO
    farmArray: Array<any>|null; // TODO
    team: Array<any>|null; // TODO
  }
