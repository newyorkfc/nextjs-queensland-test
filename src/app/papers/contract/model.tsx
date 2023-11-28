import { BankDetailVO } from "app/taxes/bank-detail/model";

export interface ContractVO {
  id: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  workerId: string | null;
  farmId: string | null;
  formVersionId: string | null;
  personalDetail: PersonalDetailVO | null;
  healthChecklist: HealthChecklistVO | null;
}

export interface PersonalDetailVO {
  id: string | null;
  cellPhone: string | null;
  email: string | null;
  address: string | null;
  taxFileNumber: string | null;
  contractId: string | null;
  emergencyContact: EmergencyContactVO | null;
  superannuation: SuperannuationVO | null;
  bankDetail: BankDetailVO | null;
}

export interface HealthChecklistVO {
  id: string | null;
  extraDisclosure: string | null;
  contractId: string | null;
  generalHealth: GeneralHealthVO | null;
  mentalHealth: MentalHealthVO | null;
  safetyAware: SafetyAwareVO | null;
  medicalCondition: MedicalConditionVO | null;
}

export interface EmergencyContactVO {
  id: string | null;
  name: string | null;
  cellPhone: string | null;
  personalDetailId: string | null;
}

export interface SuperannuationVO {
  id: string | null;
  fundName: string | null;
  memberNumber: string | null;
  personalDetailId: string | null;
}

export interface GeneralHealthVO {
  id: string | null;
  preExistingMedicalCondition: string | null;
  takingMedication: string | null;
  recentSurgery: string | null;
  recentInjury: string | null;
  jobRelatedLimitation: string | null;
  healthChecklistId: string | null;
}

export interface MentalHealthVO {
  id: string | null;
  jobStress: string | null;
  mentalCounseling: string | null;
  awareOfEap: string | null;
  healthChecklistId: string | null;
}

export interface SafetyAwareVO {
  id: string | null;
  awareOfSafetyPolicy: string | null;
  firstAidTraining: string | null;
  safetyReportingComfort: string | null;
  healthChecklistId: string | null;
}

export interface MedicalConditionVO {
  id: string | null;
  beeSting: string | null;
  epilepsy: string | null;
  diabetes: string | null;
  pregnant: string | null;
  highBloodPressure: string | null;
  other: string | null;
  healthChecklistId: string | null;
}

export interface StateVO {
  name: string | null;
  abbreviation: string | null;
}
export interface SuburbVO {
  name: string | null;
  postcode: number | null;
  state: StateVO | null;
  locality: string | null;
  latitude: number | null;
  longtiude: number | null;
}
