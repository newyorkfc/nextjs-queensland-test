import { LocationVO } from "app/customers/farm/model";
import { CompanyVO } from "app/systems/company/model";

export interface ContractFormVO {
  locationArray: Array<LocationVO> | null;
  policyArray: Array<FormPolicyVO> | null;
  agreeArray: Array<FormAgreeVO> | null;
  scheduleArray: Array<FormScheduleVO> | null;
  guidelineArray: Array<FormGuidelineVO> | null;
  checklistArray: Array<FormChecklistVO> | null;
  company: CompanyVO | null;
}

export const defaultContractForm: ContractFormVO = {
  locationArray: [],
  policyArray: [],
  agreeArray: [],
  scheduleArray: [],
  guidelineArray: [],
  checklistArray: [],
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
};

export interface FormAgreeVO {
  id: string | null;
  number: string | null;
  content: string | null;
}

export interface FormChecklistVO {
  id: string | null;
  number: string | null;
  content: string | null;
  formChecklistDetailArray: Array<FormChecklistDetailVO> | null;
}

export interface FormChecklistDetailVO {
  id: string | null;
  number: string | null;
  content: string | null;
  shortName: string | null;
  formChecklistNumber: string | null;
}

export interface FormGuidelineVO {
  id: string | null;
  number: string | null;
  title: string | null;
  content: string | null;
}

export interface FormPolicyVO {
  id: string | null;
  number: string | null;
  title: string | null;
  contentHead: string | null;
  contentTail: string | null;
  formPolicyDetailArray: Array<FormPolicyDetailVO> | null;
}

export interface FormPolicyDetailVO {
  id: string | null;
  number: string | null;
  content: string | null;
  formPolicyNumber: string | null;
}

export interface FormScheduleVO {
  id: string | null;
  number: string | null;
  title: string | null;
  content1: string | null;
  content2: string | null;
  content21: string | null;
  content22: string | null;
}
