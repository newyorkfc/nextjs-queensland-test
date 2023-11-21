import { NewContractEnum, NewContractVO } from "app/papers/new-contract/model";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
// DEPRECATED
export const useNewContract = (): [
  NewContractVO,
  Dispatch<SetStateAction<NewContractVO>>
] => {
  const [newContract, setNewContract] =
    useState<NewContractVO>(defaultNewContract);

  useEffect(() => {
    const savedData = sessionStorage.getItem(NewContractEnum.newContract);
    if (savedData && savedData !== JSON.stringify(defaultNewContract)) {
      try {
        const parsedData = JSON.parse(savedData) as NewContractVO;
        setNewContract(parsedData);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return [newContract, setNewContract];
};

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
