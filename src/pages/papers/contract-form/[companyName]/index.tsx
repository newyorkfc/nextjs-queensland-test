import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NewContractVO } from "app/papers/new-contract/model";
import { defaultNewContract } from "hooks/papers/new-contract/useNewContract";
import Pdf from "components/papers/contract-form/pdf";
import axios from "axios";
import { ContractFormVO } from "app/papers/contract-form/model";
import Personal from "components/papers/contract-form/personal";
import Policy from "components/papers/contract-form/policy";
import Agree from "components/papers/contract-form/agree";
import Schedule from "components/papers/contract-form/schedule";
import Guideline from "components/papers/contract-form/guideline";
import Checklist from "components/papers/contract-form/checklist";

export default function ContractForm() {
  const router = useRouter();
  const companyName = router.query.companyName;

  const [newContract, setNewContract] =
    useState<NewContractVO>(defaultNewContract);
  const [contractForm, setContractForm] = useState<ContractFormVO>({
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
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const scrollToComponent = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/papers/contract?do=add`,
        newContract
      );
      console.log(response.data);
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
        <button onClick={() => scrollToComponent("pdf")}>pdf</button>
        <br />
        <button onClick={() => scrollToComponent("personal")}>personal</button>
        <br />
        <button onClick={() => scrollToComponent("policy")}>policy</button>
        <br />
        <button onClick={() => scrollToComponent("agree")}>agree</button>
        <br />
        <button onClick={() => scrollToComponent("schedule")}>schedule</button>
        <br />
        <button onClick={() => scrollToComponent("guideline")}>
          guideline
        </button>
        <br />
        <button onClick={() => scrollToComponent("checklist")}>
          checklist
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
          <Policy contractForm={contractForm} />
        </div>
        <div id="agree">
          <Agree newContract={newContract} contractForm={contractForm} />
        </div>
        <div id="schedule">
          <Schedule contractForm={contractForm} />
        </div>
        <div id="guideline">
          <Guideline contractForm={contractForm} />
        </div>
        <div id="checklist">
          <Checklist
            newContract={newContract}
            setNewContract={setNewContract}
            contractForm={contractForm}
          />
        </div>
        <div className="btn-wrap">
          <button type="button">cancel</button>
          <button type="button" className="primary" onClick={handleSubmit}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
}
