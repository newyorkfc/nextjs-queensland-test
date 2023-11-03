import { FormScheduleVO } from "app/papers/contract-form/model";
import { CompanyVO } from "app/systems/company/model";
import axios from "axios";
import NavigationButton from "components/papers/contract-form/navigation-button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Schedule() {
  const router = useRouter();
  const companyName = router.query.companyName;
  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;

  const [formSchedules, setFormSchedules] = useState<Array<FormScheduleVO>>([]);
  const [company, setCompany] = useState<CompanyVO|null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    if (!companyName) return;
    const fetchData = async () => {
      try {
        const scheduleResponse = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/papers/contract-form?by=schedule`
        );
        setFormSchedules(scheduleResponse.data.array);
        const companyResponse = await axios.get(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/systems/company?by=${companyName}`
        );
        setCompany(companyResponse.data.json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [companyName]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Schedule A</h1>
      <div>
        <p>
          Picework rates
          <br />
          Starting date : {formattedDate}
          <br />
          Property Name : {companyName}
          <br />
          Property Address : {company && company.address}
        </p>
      </div>
      <div>
        PIECEWORK RATES
        {formSchedules.map((formSchedule) => (
          <div key={formSchedule.number}>
            <p>
              {formSchedule.title}
              <ul>
                <li>{formSchedule.content1}</li>
                <li>{formSchedule.content2}</li>
                {formSchedule.content21 && formSchedule.content22 && (
                  <ul>
                    <li>{formSchedule.content21}</li>
                    <li>{formSchedule.content22}</li>
                  </ul>
                )}
              </ul>
            </p>
          </div>
        ))}
      </div>
      <div>
        <input type="checkbox"/> I have read and understood.
      </div>
      <NavigationButton
        prevPath={`/papers/contract-form/${companyName}/agree`}
        nextPath={`/papers/contract-form/${companyName}/guideline`}
        currentPage={5}
      />
    </>
  );
}
