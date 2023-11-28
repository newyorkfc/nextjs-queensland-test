import { LocationVO } from "app/customers/farm/model";
import { CompanyVO } from "app/systems/company/model";

export interface ContractFormVO {
  version: FormVersionVO | null;
  company: CompanyVO | null;
  locationArray: Array<LocationVO> | null;
  policyArray: Array<FormPolicyItemVO> | null;
  agreeArray: Array<FormAgreeItemVO> | null;
  scheduleArray: Array<FormScheduleItemVO> | null;
  guidelineArray: Array<FormGuidelineItemVO> | null;
  checklistArray: Array<FormChecklistItemVO> | null;
}

export const defaultContractForm: ContractFormVO = {
  version: {
    id: null,
    createdAt: null,
    updatedAt: null,
    isMain: null,
  },
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
  locationArray: [],
  policyArray: [],
  agreeArray: [],
  scheduleArray: [],
  guidelineArray: [],
  checklistArray: [],
};

export interface FormVersionVO {
  id: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  isMain: string | null;
}

export interface FormPolicyItemVO {
  id: string | null;
  number: string | null;
  title: string | null;
  contentHead: string | null;
  contentTail: string | null;
  formVersionId: string | null;
  formPolicyDetailArray: Array<FormPolicyDetailItemVO> | null;
}

export interface FormPolicyDetailItemVO {
  id: string | null;
  number: string | null;
  content: string | null;
  formPolicyItemNumber: string | null;
}

export interface FormAgreeItemVO {
  id: string | null;
  number: string | null;
  content: string | null;
  formVersionId: string | null;
}

export interface FormScheduleItemVO {
  id: string | null;
  number: string | null;
  title: string | null;
  content1: string | null;
  content2: string | null;
  content21: string | null;
  content22: string | null;
  formVersionId: string | null;
}

export interface FormGuidelineItemVO {
  id: string | null;
  number: string | null;
  title: string | null;
  content: string | null;
  formVersionId: string | null;
}

export interface FormChecklistItemVO {
  id: string | null;
  number: string | null;
  content: string | null;
  formChecklistDetailArray: Array<FormChecklistDetailItemVO> | null;
}

export interface FormChecklistDetailItemVO {
  id: string | null;
  number: string | null;
  content: string | null;
  shortName: string | null;
  formChecklistItemNumber: string | null;
}


export interface EditableContractFormVO {
  version: FormVersionVO | null;
  policyArray: Array<FormPolicyItemVO> | null;
  agreeArray: Array<FormAgreeItemVO> | null;
  scheduleArray: Array<FormScheduleItemVO> | null;
  guidelineArray: Array<FormGuidelineItemVO> | null;
}

export const defaultEditableContractForm: EditableContractFormVO = {
  version: {
    id: null,
    createdAt: null,
    updatedAt: null,
    isMain: null,
  },
  policyArray: [],
  agreeArray: [],
  scheduleArray: [],
  guidelineArray: [],
};
