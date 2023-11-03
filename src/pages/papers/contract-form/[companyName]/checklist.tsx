import { FormChecklistVO } from "app/papers/contract-form/model";
import axios from "axios";
import NavigationButton from "components/papers/contract-form/navigation-button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Checklist() {
  const router = useRouter();
  const companyName = router.query.companyName;

  const [formChecklists, setFormChecklists] = useState<Array<FormChecklistVO>>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/papers/contract-form?by=checklist`
        );
        setFormChecklists(response.data.array);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

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
    <>
      <h1>Health Survey Checklist</h1>
      <div>
        {formChecklists.map((formChecklist) => (
          <div key={formChecklist.number}>
            <p>
              {formChecklist.content}
              {Number(formChecklist.number) === 4 && (
                <div>
                  It is your responsibility to ensure what they are and how you
                  are to be treated if the situation arises.
                  <br />
                  E.g.
                </div>
              )}
              <ul>
                {formChecklist.formChecklistDetailArray.map(
                  (formChecklistDetail) => (
                    <li key={formChecklistDetail.number}>
                      <span>{formChecklistDetail.content} </span>
                      {["Yes", "No"].map((answer) => (
                        <label key={answer}>
                          {answer}
                          <span>
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
                          </span>
                        </label>
                      ))}
                    </li>
                  )
                )}
              </ul>
            </p>
          </div>
        ))}

        <div>
          <label htmlFor="ohter">Other : </label>
          <input type="text" id="ohter" />
        </div>
        <div>
          <p>
            Please use this section to provide any additional information or
            comments related to your health, safety, or well-being concerns.
            <br />
            Duty of disclosure:
            <br />
            It is your responsibility to disclose any pre-existing conditions or
            workers compensation claims as these may affect your ability to
            perform your job. It is vital that if you have had hepatitis or any
            other infectious disease that we have not been told.
            <br />
            <input type="text" id="extraDisclosure" />
            <br />
            These rules are to protect the health and safety of all our
            employees and our customers.
            <br />
            IF YOU ARE NOT SURE, ASK THE SUPERVISOR OR MANAGEMENT.
          </p>
        </div>
      </div>

      <div>
        <label>
          <input type="checkbox" /> I have read, understand, and agree to abide
          by the “Employee Health & Hygiene Rules” above
        </label>
      </div>
      <NavigationButton
        prevPath={`/papers/contract-form/${companyName}/guideline`}
        currentPage={7}
      />
      <button>submit</button>
    </>
  );
}
