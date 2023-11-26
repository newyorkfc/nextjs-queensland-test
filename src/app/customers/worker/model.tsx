import { OrderVO } from "app/orders/order/model";
import { ContractVO } from "app/papers/contract/model";

export interface WorkerVO {
  id: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  title: string | null;
  firstName: string | null;
  lastName: string | null;
  englishName: string | null;
  gender: string | null;
  birthDate: string | null;
  teamId: string | null;
  passport: PassportVO | null;
  staffArea: StaffAreaVO | null;
  contract: ContractVO | null;
  orderArray: Array<OrderVO> | null;
}

export interface PassportVO {
  id: string | null;
  visaGrantNumber: string | null;
  visaExpireDate: string | null;
  nationality: string | null;
  passportNumber: string | null;
  workerId: string | null;
}

export interface StaffAreaVO {
  startDate: string | null;
  endDate: string | null;
  tax: string | null;
  farmNumber: string | null;
  memo: string | null;
  workerId: string | null;
}

export interface WorkerViewVO {
  id: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  locationId: string | null;
  locationName: string | null;
  farmId: string | null;
  farmName: string | null;
  teamId: string | null;
  teamName: string | null;
  firstName: string | null;
  lastName: string | null;
  englishName: string | null;
  bsb: string | null;
  accountNumber: string | null;
  email: string | null;
  cellPhone: string | null;
  taxFileNumber: string | null;
  birthDate: string | null;
  gender: string | null;
  nationality: string | null;
  passportNumber: string | null;
  visaGrantNumber: string | null;
  fundName: string | null;
  memberNumber: string | null;
  address: string | null;
  startDate: string | null;
  endDate: string | null;
  tax: string | null;
  farmNumber: string | null;
  memo: string | null;
}

export enum WorkerViewEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  locationId = "locationId",
  locationName = "locationName",
  farmId = "farmId",
  farmName = "farmName",
  teamId = "teamId",
  teamName = "teamName",
  firstName = "firstName",
  lastName = "lastName",
  englishName = "englishName",
  bsb = "bsb",
  accountNumber = "accountNumber",
  email = "email",
  cellPhone = "cellPhone",
  taxFileNumber = "taxFileNumber",
  birthDate = "birthDate",
  gender = "gender",
  nationality = "nationality",
  passportNumber = "passportNumber",
  visaGrantNumber = "visaGrantNumber",
  fundName = "fundName",
  memberNumber = "memberNumber",
  address = "address",
  startDate = "startDate",
  endDate = "endDate",
  tax = "tax",
  farmNumber = "farmNumber",
  memo = "memo",
}

export type WorkerSortOrder = "asc" | "desc" | "";

export type WorkerSearchParam = "all" | "team" | "name";

export interface WorkerFilterVO {
  searchParam: WorkerSearchParam;
  searchKeyword: string;
}

export const defaultWorkerFilter: WorkerFilterVO = {
  searchParam: "all",
  searchKeyword: "",
};
