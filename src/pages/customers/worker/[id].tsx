import { WorkerDetailVO } from "app/customers/worker-detail/model";
import {
  ContractFormVO,
  EditableContractFormVO,
  defaultContractForm,
  defaultEditableContractForm,
} from "app/papers/contract-form/model";
import {
  IsReadVO,
  NewContractVO,
  defaultIsRead,
  defaultNewContract,
} from "app/papers/new-contract/model";
import axios from "axios";
import StaffArea from "components/customers/worker/staff-area";
import AgreeEdit from "components/papers/contract-form/agree-edit";
import Checklist from "components/papers/contract-form/checklist";
import GuidelineEdit from "components/papers/contract-form/guideline-edit";
import Personal from "components/papers/contract-form/personal";
import PolicyEdit from "components/papers/contract-form/policy-edit";
import ScheduleEdit from "components/papers/contract-form/schedule-edit";
import { useRouter } from "next/router";
import {
  convertDateFromAuFormat,
  convertDateToAuFormat,
} from "pages/utils/dev/tools";
import { useEffect, useState } from "react";

export default function WorkerDetail() {
  const router = useRouter();
  const workerId = router.query.id;

  const [workerDetail, setWorkerDetail] = useState<WorkerDetailVO>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [newContract, setNewContract] =
    useState<NewContractVO>(defaultNewContract);
  const [contractForm, setContractForm] =
    useState<ContractFormVO>(defaultContractForm);
  const [editableContractForm, setEditableContractForm] =
    useState<EditableContractFormVO>(defaultEditableContractForm);

  const [isRead, setIsRead] = useState<IsReadVO>(defaultIsRead);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToComponent = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSaveClick = () => {
    const updatedWorkerDetail = {
      ...workerDetail,
      location: newContract.location,
      farm: newContract.farm,
      worker: newContract.worker,
      passport: newContract.passport,
      staffArea: newContract.staffArea,
      contract: newContract.contract,
      personalDetail: newContract.personalDetail,
      emergencyContact: newContract.emergencyContact,
      superannuation: newContract.superannuation,
      bankDetail: newContract.bankDetail,
      healthChecklist: newContract.healthChecklist,
      generalHealth: newContract.generalHealth,
      mentalHealth: newContract.mentalHealth,
      safetyAware: newContract.safetyAware,
      medicalCondition: newContract.medicalCondition,
      formPolicyArray: editableContractForm.policyArray,
      formAgreeArray: editableContractForm.agreeArray,
      formScheduleArray: editableContractForm.scheduleArray,
      formGuidelineArray: editableContractForm.guidelineArray,
    };
    if (
      JSON.stringify(workerDetail) ===
      JSON.stringify({
        ...updatedWorkerDetail,
        worker: {
          ...updatedWorkerDetail.worker,
          birthDate: convertDateFromAuFormat(
            updatedWorkerDetail.worker.birthDate
          ),
        },
      })
    ) {
      alert("There is no change.");
      return;
    }
    setWorkerDetail(updatedWorkerDetail);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSave = () => {
    handleSubmit();
    window.location.reload();
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/customers/worker?do=alter`,
        workerDetail
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
      alert(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/customers/worker?id=${workerId}`
          )
          .then((response) => {
            setWorkerDetail(response.data.json);
            setNewContract({
              ...newContract,
              formVersion: response.data.json.formVersion,
              company: response.data.json.company,
              location: response.data.json.location,
              farm: response.data.json.farm,
              worker: {
                ...response.data.json.worker,
                birthDate: convertDateToAuFormat(
                  response.data.json.worker.birthDate
                ),
              },
              passport: response.data.json.passport,
              staffArea: response.data.json.staffArea,
              contract: response.data.json.contract,
              personalDetail: response.data.json.personalDetail,
              emergencyContact: response.data.json.emergencyContact,
              superannuation: response.data.json.superannuation,
              bankDetail: response.data.json.bankDetail,
              healthChecklist: response.data.json.healthChecklist,
              generalHealth: response.data.json.generalHealth,
              mentalHealth: response.data.json.mentalHealth,
              safetyAware: response.data.json.safetyAware,
              medicalCondition: response.data.json.medicalCondition,
            });
            setContractForm({
              ...contractForm,
              version: response.data.json.formVersion,
              company: response.data.json.company,
              locationArray: response.data.json.locationArray,
              policyArray: response.data.json.formPolicyArray,
              agreeArray: response.data.json.formAgreeArray,
              scheduleArray: response.data.json.formScheduleArray,
              guidelineArray: response.data.json.formGuidelineArray,
              checklistArray: response.data.json.formChecklistArray,
            });
            setEditableContractForm({
              ...editableContractForm,
              version: response.data.json.formVersion,
              policyArray: response.data.json.formPolicyArray,
              agreeArray: response.data.json.formAgreeArray,
              scheduleArray: response.data.json.formScheduleArray,
              guidelineArray: response.data.json.formGuidelineArray,
            });
          });
      } catch (error) {
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };
    workerId && fetchData();
  }, [workerId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Worker Detail</h1>
      <div style={{ display: "flex" }}>
        <div id="scroll-button" style={{ position: "fixed" }}>
          <button onClick={() => scrollToComponent("staff-area")}>
            Staff Area
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
          <button onClick={() => scrollToComponent("schedule")}>
            Schedule
          </button>
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
          <div id="staff-area">
            <StaffArea
              workerDetail={workerDetail}
              setWorkerDetail={setWorkerDetail}
            />
          </div>
          <div id="personal">
            <Personal
              newContract={newContract}
              setNewContract={setNewContract}
              contractForm={contractForm}
            />
          </div>
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
            <button
              type="button"
              onClick={() => {
                window.location.reload();
              }}
            >
              reset
            </button>
            <button type="submit" className="primary" onClick={handleSaveClick}>
              save
            </button>
            {isModalOpen && (
              <Modal onClose={handleModalClose} onSave={handleModalSave} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const Modal = ({ onClose, onSave }) => (
  <div className="modal">
    <div className="modal-content">
      <p>Do you want to save changes?</p>
      <button onClick={onClose}>Close</button>
      <button onClick={onSave}>Save</button>
    </div>
  </div>
);
