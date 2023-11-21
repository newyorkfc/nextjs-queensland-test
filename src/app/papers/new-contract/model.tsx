import { CompanyVO } from "app/systems/company/model";
import { PassportVO, StaffAreaVO, WorkerVO } from "app/customers/worker/model";
import {
  ContractVO,
  EmergencyContactVO,
  GeneralHealthVO,
  HealthChecklistVO,
  MedicalConditionVO,
  MentalHealthVO,
  PersonalDetailVO,
  SafetyAwareVO,
  SuperannuationVO,
} from "../contract/model";
import { BankDetailVO } from "app/taxes/bank-detail/model";

export interface NewContractVO {
  company: CompanyVO | null;
  worker: WorkerVO | null;
  passport: PassportVO | null;
  staffArea: StaffAreaVO | null;
  contract: ContractVO | null;
  personalDetail: PersonalDetailVO | null;
  emergencyContact: EmergencyContactVO | null;
  superannuation: SuperannuationVO | null;
  bankDetail: BankDetailVO | null;
  healthChecklist: HealthChecklistVO | null;
  generalHealth: GeneralHealthVO | null;
  mentalHealth: MentalHealthVO | null;
  safetyAware: SafetyAwareVO | null;
  medicalCondition: MedicalConditionVO | null;
}

export enum NewContractEnum {
  newContract = "newContract",
  company = "company",
  worker = "worker",
  passport = "passport",
  staffArea = "staffArea",
  contract = "contract",
  personalDetail = "personalDetail",
  emergencyContact = "emergencyContact",
  superannuation = "superannuation",
  bankDetail = "bankDetail",
  healthChecklist = "healthChecklist",
  generalHealth = "generalHealth",
  mentalHealth = "mentalHealth",
  safetyAware = "safetyAware",
  medicalCondition = "medicalCondition",
}
