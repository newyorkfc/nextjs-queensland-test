import { CompanyVO } from "app/systems/company/model";
import { TeamVO } from "app/systems/team/model";
import { FarmVO, LocationVO } from "../farm/model";
import { PassportVO, StaffAreaVO, WorkerVO } from "../worker/model";
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
} from "app/papers/contract/model";
import { BankDetailVO } from "app/taxes/bank-detail/model";
import {
  FormAgreeItemVO,
  FormChecklistItemVO,
  FormGuidelineItemVO,
  FormPolicyItemVO,
  FormScheduleItemVO,
  FormVersionVO,
} from "app/papers/contract-form/model";

export interface WorkerDetailVO {
  company: CompanyVO | null;
  team: TeamVO | null;
  location: LocationVO | null;
  farm: FarmVO | null;
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

  formVersion: FormVersionVO | null;
  locationArray: Array<LocationVO> | null;
  formPolicyArray: Array<FormPolicyItemVO> | null;
  formAgreeArray: Array<FormAgreeItemVO> | null;
  formScheduleArray: Array<FormScheduleItemVO> | null;
  formGuidelineArray: Array<FormGuidelineItemVO> | null;
  formChecklistArray: Array<FormChecklistItemVO> | null;

  teamArray: Array<TeamVO> | null;
}

export enum WorkerDetailEnum {
  company = "company",
  team = "team",
  location = "location",
  farm = "farm",
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

  formVersion = "formVersion",
  locationArray = "locationArray",
  formPolicyArray = "formPolicyArray",
  formAgreeArray = "formAgreeArray",
  formScheduleArray = "formScheduleArray",
  formGuidelineArray = "formGuidelineArray",
  formChecklistArray = "formChecklistArray",

  teamArray = "teamArray",
}
