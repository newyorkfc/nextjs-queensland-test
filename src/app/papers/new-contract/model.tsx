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
import { FarmVO, LocationVO } from "app/customers/farm/model";

export interface NewContractVO {
  company: CompanyVO | null;
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
}

export enum NewContractEnum {
  newContract = "newContract",
  company = "company",
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
}

export const defaultNewContract: NewContractVO = {
  company: {
    id: null,
    createdAt: null,
    updatedAt: null,
    name: null,
    address: null,
    staffId: null,
    boardArray: null,
    farmArray: null,
    teamArray: null,
  },
  location: {
    id: null,
    createdAt: null,
    updatedAt: null,
    name: null,
    farmArray: null,
  },
  farm: {
    id: null,
    createdAt: null,
    updatedAt: null,
    name: null,
    locationId: null,
    companyId: null,
    orderArray: null,
  },
  worker: {
    id: null,
    createdAt: null,
    updatedAt: null,
    title: null,
    firstName: null,
    lastName: null,
    englishName: null,
    gender: null,
    birthDate: null,
    teamId: null,
    passport: null,
    staffArea: null,
    contract: null,
    orderArray: null,
  },
  passport: {
    id: null,
    visaGrantNumber: null,
    visaExpireDate: null,
    nationality: null,
    passportNumber: null,
    workerId: null,
  },
  staffArea: {
    startDate: null,
    endDate: null,
    tax: null,
    farmNumber: null,
    memo: null,
    workerId: null,
  },
  contract: {
    id: null,
    createdAt: null,
    updatedAt: null,
    workerId: null,
    farmId: null,
    personalDetail: null,
    healthChecklist: null,
  },
  personalDetail: {
    id: null,
    cellPhone: null,
    email: null,
    address: null,
    taxFileNumber: null,
    contractId: null,
    emergencyContact: null,
    superannuation: null,
    bankDetail: null,
  },
  emergencyContact: {
    id: null,
    name: null,
    cellPhone: null,
    personalDetailId: null,
  },
  superannuation: {
    id: null,
    fundName: null,
    memberNumber: null,
    personalDetailId: null,
  },
  bankDetail: {
    id: null,
    bankName: null,
    accountName: null,
    bsb: null,
    accountNumber: null,
    personalDetailId: null,
  },
  healthChecklist: {
    id: null,
    extraDisclosure: null,
    contractId: null,
    generalHealth: null,
    mentalHealth: null,
    safetyAware: null,
    medicalCondition: null,
  },
  generalHealth: {
    id: null,
    preExistingMedicalCondition: null,
    takingMedication: null,
    recentSurgery: null,
    recentInjury: null,
    jobRelatedLimitation: null,
    healthChecklistId: null,
  },
  mentalHealth: {
    id: null,
    jobStress: null,
    mentalCounseling: null,
    awareOfEap: null,
    healthChecklistId: null,
  },
  safetyAware: {
    id: null,
    awareOfSafetyPolicy: null,
    firstAidTraining: null,
    safetyReportingComfort: null,
    healthChecklistId: null,
  },
  medicalCondition: {
    id: null,
    beeSting: null,
    epilepsy: null,
    diabetes: null,
    pregnant: null,
    highBloodPressure: null,
    other: null,
    healthChecklistId: null,
  },
};

export interface IsReadVO {
  policy: boolean;
  agree: boolean;
  schedule: boolean;
  guideline: boolean;
  checklist: boolean;
  validationError: string;
}

export enum IsReadEnum {
  policy = "policy",
  agree = "agree",
  schedule = "schedule",
  guideline = "guideline",
  checklist = "checklist",
  validationError = "validationError",
}

export const defaultIsRead: IsReadVO = {
  policy: false,
  agree: false,
  schedule: false,
  guideline: false,
  checklist: false,
  validationError: "",
};
