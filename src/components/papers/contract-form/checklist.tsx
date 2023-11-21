import { FormChecklistVO } from "app/papers/contract-form/model";
import axios from "axios";
import NavigationButton from "components/papers/contract-form/navigation-button";
import { NewContractContext } from "contexts/papers/contract/new-contract";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

export default function Checklist({
  newContract,
  setNewContract,
  contractForm,
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

  const handleAnswerChange = (key) => (e) => {
    setAnswers((prev) => ({ ...prev, [key]: e.target.value }));
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
            <input type="text" id="ohter" className="input-box" />
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
            <input type="text" className="input-box" id="extraDisclosure" />
            <span>
              These rules are to protect the health and safety of all our
              employees and our customers.
            </span>
            <span>IF YOU ARE NOT SURE, ASK THE SUPERVISOR OR MANAGEMENT.</span>
          </div>

          <div className="agree-wrap">
            <input type="checkbox" id="check1" />
            <label htmlFor="check1">
              I have read, understand, and agree to abide by the “Employee
              Health & Hygiene Rules” above
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
