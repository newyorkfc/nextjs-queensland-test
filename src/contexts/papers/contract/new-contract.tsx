// DEPRECATED
import { NewContractVO } from "app/papers/new-contract/model";
import { createContext } from "react";
import React, { useState } from "react";

export const NewContractContext = createContext(null);

const NewContractProvider = ({ children }) => {
  const [newContract, setNewContract] = useState<NewContractVO>({
    company: null,
    worker: null,
    passport: null,
    staffArea: null,
    contract: null,
    personalDetail: null,
    emergencyContact: null,
    superannuation: null,
    bankDetail: null,
    healthChecklist: null,
    generalHealth: null,
    mentalHealth: null,
    safetyAware: null,
    medicalCondition: null,
  });

  return (
    <NewContractContext.Provider value={{ newContract, setNewContract }}>
      {children}
    </NewContractContext.Provider>
  );
};

export default NewContractProvider;
