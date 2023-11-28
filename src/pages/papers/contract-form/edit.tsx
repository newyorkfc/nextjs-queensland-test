import {
  EditableContractFormVO,
  defaultEditableContractForm,
} from "app/papers/contract-form/model";
import axios from "axios";
import AgreeEdit from "components/papers/contract-form/agree-edit";
import GuidelineEdit from "components/papers/contract-form/guideline-edit";
import PolicyEdit from "components/papers/contract-form/policy-edit";
import ScheduleEdit from "components/papers/contract-form/schedule-edit";
import { useEffect, useState } from "react";

export default function ContractFormEdit() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [editableContractForm, setEditableContractForm] =
    useState<EditableContractFormVO>(defaultEditableContractForm);

  const scrollToComponent = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/papers/contract-form?do=alter`,
        editableContractForm
      );
      if (response && response.data) {
        if (response.data.message === "OK") {
          alert(
            "Successfully updated the contract form. Please refresh the page to see the changes."
          );
          window.location.reload();
        } else {
          alert(JSON.stringify(response.data));
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/papers/contract-form?by=editable`
          )
          .then((response) => {
            console.log(response.data);
            setEditableContractForm(response.data.json);
          });
      } catch (error) {
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Edit Contract Form</h1>
      <div style={{ display: "flex" }}>
        <div id="scroll-button" style={{ position: "fixed" }}>
          <button onClick={() => scrollToComponent("policy")}>Policies</button>
          <br />
          <button onClick={() => scrollToComponent("agree")}>
            Piecework Agreement
          </button>
          <br />
          <button onClick={() => scrollToComponent("schedule")}>
            Schedule
          </button>
          <br />
          <button onClick={() => scrollToComponent("guideline")}>
            Work Health & Safety Guidelines
          </button>
        </div>
        <div id="contract-form" style={{ width: "100%" }}>
          <div id="policy">
            <PolicyEdit
              editableContractForm={editableContractForm}
              setEditableContractForm={setEditableContractForm}
            />
          </div>
          <div id="agree">
            <AgreeEdit
              editableContractForm={editableContractForm}
              setEditableContractForm={setEditableContractForm}
            />
          </div>
          <div id="schedule">
            <ScheduleEdit
              editableContractForm={editableContractForm}
              setEditableContractForm={setEditableContractForm}
            />
          </div>
          <div id="guideline">
            <GuidelineEdit
              editableContractForm={editableContractForm}
              setEditableContractForm={setEditableContractForm}
            />
          </div>
          <div className="btn-wrap">
            <button
              type="button"
              onClick={() => {
                window.location.reload();
              }}
            >
              reset
            </button>
            <button type="submit" className="primary" onClick={handleSubmit}>
              save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
