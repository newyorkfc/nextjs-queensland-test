import { IsReadEnum, NewContractEnum } from "app/papers/new-contract/model";
import { updateIsRead } from "helpers/papers/new-contract/updateIsRead";
import { updateNewContract } from "helpers/papers/new-contract/updateNewContract";
import { useState } from "react";

export default function Checklist({
  newContract,
  setNewContract,
  contractForm,
  isRead,
  setIsRead,
  isSubmitDisabled,
  setIsSubmitDisabled,
}) {
  const [answers, setAnswers] = useState({
    preExistingMedicalCondition: "",
    takingMedication: "",
    recentSurgery: "",
    recentInjury: "",
    jobRelatedLimitation: "",
    jobStress: "",
    mentalCounseling: "",
    awareOfEap: "",
    awareOfSafetyPolicy: "",
    firstAidTraining: "",
    safetyReportingComfort: "",
    beeSting: "",
    epilepsy: "",
    diabetes: "",
    pregnant: "",
    highBloodPressure: "",
    other: "",
    extraDisclosure: "",
  });

  const handleAnswerChange = (shortName) => (e) => {
    setAnswers((prev) => ({ ...prev, [shortName]: e.target.value }));
    switch (shortName) {
      case "preExistingMedicalCondition":
        updateNewContract(
          newContract,
          setNewContract,
          NewContractEnum.generalHealth,
          {
            [shortName]: e.target.value,
          }
        );
        break;
      case "takingMedication":
        updateNewContract(
          newContract,
          setNewContract,
          NewContractEnum.generalHealth,
          {
            [shortName]: e.target.value,
          }
        );
        break;
      case "recentSurgery":
        updateNewContract(
          newContract,
          setNewContract,
          NewContractEnum.generalHealth,
          {
            [shortName]: e.target.value,
          }
        );
        break;
      case "recentInjury":
        updateNewContract(
          newContract,
          setNewContract,
          NewContractEnum.generalHealth,
          {
            [shortName]: e.target.value,
          }
        );
        break;
      case "jobRelatedLimitation":
        updateNewContract(
          newContract,
          setNewContract,
          NewContractEnum.generalHealth,
          {
            [shortName]: e.target.value,
          }
        );
        break;
      case "jobStress":
        updateNewContract(
          newContract,
          setNewContract,
          NewContractEnum.mentalHealth,
          {
            [shortName]: e.target.value,
          }
        );
        break;
      case "mentalCounseling":
        updateNewContract(
          newContract,
          setNewContract,
          NewContractEnum.mentalHealth,
          {
            [shortName]: e.target.value,
          }
        );
        break;
      case "awareOfEap":
        updateNewContract(
          newContract,
          setNewContract,
          NewContractEnum.mentalHealth,
          {
            [shortName]: e.target.value,
          }
        );
        break;
      case "awareOfSafetyPolicy":
        updateNewContract(
          newContract,
          setNewContract,
          NewContractEnum.safetyAware,
          {
            [shortName]: e.target.value,
          }
        );
        break;
      case "firstAidTraining":
        updateNewContract(
          newContract,
          setNewContract,
          NewContractEnum.safetyAware,
          {
            [shortName]: e.target.value,
          }
        );
        break;
      case "safetyReportingComfort":
        updateNewContract(
          newContract,
          setNewContract,
          NewContractEnum.safetyAware,
          {
            [shortName]: e.target.value,
          }
        );
        break;
      case "beeSting":
        updateNewContract(
          newContract,
          setNewContract,
          NewContractEnum.medicalCondition,
          {
            [shortName]: e.target.value,
          }
        );
        break;
      case "epilepsy":
        updateNewContract(
          newContract,
          setNewContract,
          NewContractEnum.medicalCondition,
          {
            [shortName]: e.target.value,
          }
        );
        break;
      case "diabetes":
        updateNewContract(
          newContract,
          setNewContract,
          NewContractEnum.medicalCondition,
          {
            [shortName]: e.target.value,
          }
        );
        break;
      case "pregnant":
        updateNewContract(
          newContract,
          setNewContract,
          NewContractEnum.medicalCondition,
          {
            [shortName]: e.target.value,
          }
        );
        break;
      case "highBloodPressure":
        updateNewContract(
          newContract,
          setNewContract,
          NewContractEnum.medicalCondition,
          {
            [shortName]: e.target.value,
          }
        );
        break;
      case "other":
        updateNewContract(
          newContract,
          setNewContract,
          NewContractEnum.medicalCondition,
          {
            [shortName]: e.target.value,
          }
        );
        break;
      case "extraDisclosure":
        updateNewContract(
          newContract,
          setNewContract,
          NewContractEnum.healthChecklist,
          {
            [shortName]: e.target.value,
          }
        );
        break;
    }
  };

  const getAnswerValue = (answer) => {
    switch (answer) {
      case "Yes":
        return "Y";
      case "No":
        return "N";
      default:
        return "";
    }
  };

  const handleChecklistIsRead = () => {
    updateIsRead(isRead, setIsRead, setIsSubmitDisabled, IsReadEnum.checklist);
  };

  return (
    <section className="paper checklist">
      <div className="container">
        <div className="tit-area">
          <h1 className="h1">Health Survey Checklist</h1>
        </div>
        <div className="content">
          {contractForm.checklistArray.map((formChecklist) => (
            <div key={formChecklist.number}>
              <h3 className="h3">{formChecklist.content}</h3>
              {Number(formChecklist.number) === 4 && (
                <div>
                  It is your responsibility to ensure what they are and how you
                  are to be treated if the situation arises.
                  <br />
                  E.g.
                </div>
              )}
              <ul className="ulist-type2">
                {formChecklist.formChecklistDetailArray.map(
                  (formChecklistDetail) => (
                    <li key={formChecklistDetail.number}>
                      <span>{formChecklistDetail.content} </span>
                      <span className="radio-box">
                        {["Yes", "No"].map((answer) => (
                          <label key={answer}>
                            <input
                              type="radio"
                              id={formChecklistDetail.shortName}
                              value={getAnswerValue(answer)}
                              checked={
                                answers[formChecklistDetail.shortName] ===
                                getAnswerValue(answer)
                              }
                              onChange={handleAnswerChange(
                                formChecklistDetail.shortName
                              )}
                            />
                            <span>{answer}</span>
                          </label>
                        ))}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}

          <div className="form-wrap">
            <label htmlFor="ohter">Other</label>
            <input
              type="text"
              id="ohter"
              className="input-box"
              onChange={handleAnswerChange("other")}
            />
          </div>
          <div className="comment">
            <span>
              Please use this section to provide any additional information or
              comments related to your health, safety, or well-being concerns.
            </span>
            <span>Duty of disclosure:</span>
            <span>
              It is your responsibility to disclose any pre-existing conditions
              or workers compensation claims as these may affect your ability to
              perform your job. It is vital that if you have had hepatitis or
              any other infectious disease that we have not been told.
            </span>
            <input
              type="text"
              className="input-box"
              id="extraDisclosure"
              onChange={handleAnswerChange("extraDisclosure")}
            />
            <span>
              These rules are to protect the health and safety of all our
              employees and our customers.
            </span>
            <span>IF YOU ARE NOT SURE, ASK THE SUPERVISOR OR MANAGEMENT.</span>
          </div>

          <div className="agree-wrap">
            <input
              type="checkbox"
              id="checklistIsRead"
              value={isRead.checklist}
              onChange={handleChecklistIsRead}
            />
            <label htmlFor="checklistIsRead">
              I have read, understand, and agree to abide by the “Employee
              Health & Hygiene Rules” above
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
