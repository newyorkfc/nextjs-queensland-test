
import { IsReadEnum, IsReadVO } from "app/papers/new-contract/model";
import { Dispatch, SetStateAction } from "react";

export const updateIsRead = (
  isRead: IsReadVO,
  setIsRead: Dispatch<SetStateAction<IsReadVO>>,
  setIsSubmitDisabled: Dispatch<SetStateAction<boolean>>,
  fieldKey: keyof IsReadVO
) => {
  const updatedState = { ...isRead, [fieldKey]: !isRead[fieldKey] };

  const allOtherTrue = Object.entries(updatedState)
    .filter(([key]) => key !== fieldKey && key !== IsReadEnum.validationError)
    .every(([, value]) => value);

  if (allOtherTrue && updatedState[fieldKey]) {
    setIsSubmitDisabled(false);
    updatedState.validationError = "";
  }

  setIsRead(updatedState);
};
