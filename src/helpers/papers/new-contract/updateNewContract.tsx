import { NewContractVO } from "app/papers/new-contract/model";
import { Dispatch, SetStateAction } from "react";

export const updateNewContract = (
  newContract: NewContractVO,
  setNewContract: Dispatch<SetStateAction<NewContractVO>>,
  fieldKey: keyof NewContractVO,
  updatedField: object
) => {
  const updatedNewContract = {
    ...newContract,
    [fieldKey]: { ...newContract[fieldKey], ...updatedField },
  };
  setNewContract(updatedNewContract);
};
