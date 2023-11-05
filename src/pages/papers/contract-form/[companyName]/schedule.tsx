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
  const formattedDate = `${String(today.getDate()).padStart(2, "0")}/${String(
    today.getMonth() + 1
  ).padStart(2, "0")}/${today.getFullYear()}`;

  const [formSchedules, setFormSchedules] = useState<Array<FormScheduleVO>>([]);
  const [company, setCompany] = useState<CompanyVO | null>(null);
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
    <section className="paper schedule">
      <div className="container">
        <div className="tit-area">
          <h1 className="h1">Schedule A</h1>
        </div>
        <div className="content">
          <h3 className="h3">PIECEWORK RATES</h3>
          <div>
            <div className="form-wrap">
              <label htmlFor="input1">Starting date</label>
              <input
                type="text"
                className="input-box"
                id="input1"
                value={formattedDate}
              />
            </div>
            <div className="form-wrap">
              <label htmlFor="input1">Property Name</label>
              <input
                type="text"
                className="input-box"
                id="input1"
                value={companyName}
              />
            </div>
            <div className="form-wrap">
              <label htmlFor="input1">Property Address</label>
              <input
                type="text"
                className="input-box"
                id="input1"
                value={company && company.address}
              />
            </div>
          </div>
          <h3 className="h3">PIECEWORK RATES</h3>
          {formSchedules.map((formSchedule) => (
            <dl key={formSchedule.number}>
              <dt>{formSchedule.title}</dt>
              <dd>
                <ul className="ulist-type1">
                  <li>{formSchedule.content1}</li>
                  <li>{formSchedule.content2}</li>
                  {formSchedule.content21 && formSchedule.content22 && (
                    <ul>
                      <li>{formSchedule.content21}</li>
                      <li>{formSchedule.content22}</li>
                    </ul>
                  )}
                </ul>
              </dd>
            </dl>
          ))}
          <div className="agree-wrap">
            <input type="checkbox" id="check1" />
            <label htmlFor="check1">I have read and understood.</label>
          </div>
        </div>
        <NavigationButton
          prevPath={`/papers/contract-form/${companyName}/agree`}
          nextPath={`/papers/contract-form/${companyName}/guideline`}
          currentPage={5}
        />
      </div>
    </section>
  );
}
