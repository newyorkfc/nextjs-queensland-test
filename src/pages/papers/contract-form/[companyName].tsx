import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  NewContractEnum,
  NewContractVO,
  defaultNewContract,
} from "app/papers/new-contract/model";
import Pdf from "components/papers/contract-form/pdf";
import axios from "axios";
import {
  ContractFormVO,
  defaultContractForm,
} from "app/papers/contract-form/model";
import Personal from "components/papers/contract-form/personal";
import Policy from "components/papers/contract-form/policy";
import Agree from "components/papers/contract-form/agree";
import Schedule from "components/papers/contract-form/schedule";
import Guideline from "components/papers/contract-form/guideline";
import Checklist from "components/papers/contract-form/checklist";
import { updateNewContract } from "helpers/papers/new-contract/updateNewContract";

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
  const router = useRouter();
  const companyName = router.query.companyName;

  const [newContract, setNewContract] =
    useState<NewContractVO>(defaultNewContract);
  const [contractForm, setContractForm] =
    useState<ContractFormVO>(defaultContractForm);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRead, setIsRead] = useState<IsReadVO>(defaultIsRead);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false);

  const scrollToComponent = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async () => {
    console.log("isRead");
    console.log(isRead);
    console.log("isSubmitDisabled");
    console.log(isSubmitDisabled);

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
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/papers/contract?do=add`,
        newContract
      );
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
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/papers/contract-form?by=all&company=${companyName}`
        );
        setContractForm(response.data.json);
        updateNewContract(
          newContract,
          setNewContract,
          NewContractEnum.company,
          {
            name: companyName,
          }
        );
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    companyName && fetchData();
  }, [companyName]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: "flex" }}>
      <div id="scroll-button" style={{ position: "fixed" }}>
        <button onClick={() => scrollToComponent("pdf")}>
          Fair Work Infomation
        </button>
        <br />
        <button onClick={() => scrollToComponent("personal")}>
          Personal Details
        </button>
        <br />
        <button onClick={() => scrollToComponent("policy")}>Policies</button>
        <br />
        <button onClick={() => scrollToComponent("agree")}>
          Piecework Agreement
        </button>
        <br />
        <button onClick={() => scrollToComponent("schedule")}>Schedule</button>
        <br />
        <button onClick={() => scrollToComponent("guideline")}>
          Work Health & Safety Guidelines
        </button>
        <br />
        <button onClick={() => scrollToComponent("checklist")}>
          Health Survey Checklist
        </button>
      </div>
      <div id="contract-form" style={{ width: "100%" }}>
        <div id="pdf">
          <Pdf contractForm={contractForm} />
        </div>
        <div id="personal">
          <Personal
            newContract={newContract}
            setNewContract={setNewContract}
            contractForm={contractForm}
          />
        </div>
        <div id="policy">
          <Policy
            contractForm={contractForm}
            isRead={isRead}
            setIsRead={setIsRead}
            isSubmitDisabled={isSubmitDisabled}
            setIsSubmitDisabled={setIsSubmitDisabled}
          />
        </div>
        <div id="agree">
          <Agree
            newContract={newContract}
            contractForm={contractForm}
            isRead={isRead}
            setIsRead={setIsRead}
            isSubmitDisabled={isSubmitDisabled}
            setIsSubmitDisabled={setIsSubmitDisabled}
          />
        </div>
        <div id="schedule">
          <Schedule
            contractForm={contractForm}
            isRead={isRead}
            setIsRead={setIsRead}
            isSubmitDisabled={isSubmitDisabled}
            setIsSubmitDisabled={setIsSubmitDisabled}
          />
        </div>
        <div id="guideline">
          <Guideline
            contractForm={contractForm}
            isRead={isRead}
            setIsRead={setIsRead}
            isSubmitDisabled={isSubmitDisabled}
            setIsSubmitDisabled={setIsSubmitDisabled}
          />
        </div>
        <div id="checklist">
          <Checklist
            newContract={newContract}
            setNewContract={setNewContract}
            contractForm={contractForm}
            isRead={isRead}
            setIsRead={setIsRead}
            isSubmitDisabled={isSubmitDisabled}
            setIsSubmitDisabled={setIsSubmitDisabled}
          />
        </div>

        <div className="btn-wrap">
          {isRead.validationError && <div>{isRead.validationError}</div>}
          <button type="button">cancel</button>
          <button
            type="submit"
            className="primary"
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}
