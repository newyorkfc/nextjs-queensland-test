import { useState } from "react";
import axios from "axios";

export interface IsReadVO {
  policy: boolean;
  agree: boolean;
  schedule: boolean;
  guideline: boolean;
  checklist: boolean;
  validationError: string;
}
export const defaultIsRead: IsReadVO = {
  policy: false,
  agree: false,
  schedule: false,
  guideline: false,
  checklist: false,
  validationError: "",
};

export default function ContractForm() {
  const [isRead, setIsRead] = useState<IsReadVO>(defaultIsRead);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (
      !isRead.policy ||
      !isRead.agree ||
      !isRead.schedule ||
      !isRead.guideline ||
      !isRead.checklist
    ) {
      setIsSubmitDisabled(true);
      setIsRead({
        ...isRead,
        validationError: "Please read all the documents.",
      });
      return;
    }

    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_SERVER_URL);
      if (response && response.data) {
        if (response.data.message === "OK") {
          alert(
            "Contract has been submitted successfully.\nWhen the contract is approved, you will receive an email."
          );
        } else {
          alert(response.data);
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <input
        type="checkbox"
        id="policyIsRead"
        onChange={() => {
          if (
            isRead.policy === false &&
            isRead.agree &&
            isRead.schedule &&
            isRead.guideline &&
            isRead.checklist
          ) {
            setIsSubmitDisabled(false);
            setIsRead({
              ...isRead,
              policy: !isRead.policy,
              validationError: "",
            });
          } else {
            setIsRead({ ...isRead, policy: !isRead.policy });
          }
        }}
      />
      <input
        type="checkbox"
        id="agreeIsRead"
        onChange={() => {
          if (
            isRead.policy &&
            isRead.agree === false &&
            isRead.schedule &&
            isRead.guideline &&
            isRead.checklist
          ) {
            setIsSubmitDisabled(false);
            setIsRead({ ...isRead, agree: !isRead.agree, validationError: "" });
          } else {
            setIsRead({ ...isRead, agree: !isRead.agree });
          }
        }}
      />
      <input
        type="checkbox"
        id="scheduleIsRead"
        onChange={() => {
          if (
            isRead.policy &&
            isRead.agree &&
            isRead.schedule === false &&
            isRead.guideline &&
            isRead.checklist
          ) {
            setIsSubmitDisabled(false);
            setIsRead({
              ...isRead,
              schedule: !isRead.schedule,
              validationError: "",
            });
          } else {
            setIsRead({ ...isRead, schedule: !isRead.schedule });
          }
        }}
      />
      <input
        type="checkbox"
        id="guidelineIsRead"
        onChange={() => {
          if (
            isRead.policy &&
            isRead.agree &&
            isRead.schedule &&
            isRead.guideline === false &&
            isRead.checklist
          ) {
            setIsSubmitDisabled(false);
            setIsRead({
              ...isRead,
              guideline: !isRead.guideline,
              validationError: "",
            });
          } else {
            setIsRead({ ...isRead, guideline: !isRead.guideline });
          }
        }}
      />
      <input
        type="checkbox"
        id="checklistIsRead"
        onChange={() => {
          if (
            isRead.policy &&
            isRead.agree &&
            isRead.schedule &&
            isRead.guideline &&
            isRead.checklist === false
          ) {
            setIsSubmitDisabled(false);
            setIsRead({
              ...isRead,
              checklist: !isRead.checklist,
              validationError: "",
            });
          } else {
            setIsRead({ ...isRead, checklist: !isRead.checklist });
          }
        }}
      />
      <div className="btn-wrap">
        {isRead.validationError && <div>{isRead.validationError}</div>}
        <button
          type="submit"
          className="primary"
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
        >
          submit
        </button>
      </div>
    </>
  );
}
