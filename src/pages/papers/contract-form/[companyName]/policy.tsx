import { FormPolicyVO } from "app/papers/contract-form/model";
import axios, { formToJSON } from "axios";
import NavigationButton from "components/papers/contract-form/navigation-button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Policy() {
  const router = useRouter();
  const companyName = router.query.companyName;
  const [formPolicies, setFormPolicies] = useState<Array<FormPolicyVO>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/papers/contract-form?by=policy`
        );
        setFormPolicies(response.data.array);
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
  return (
    <section className="paper">
      <div className="container">
        <div className="tit-area">
          <h1 className="h1">{companyName} Policies</h1>
        </div>
        <div className="content">
          <div className=" col">
            {formPolicies.map((formPolicy) => (
              <div key={formPolicy.number}>
                <h3 className="h3">
                  {formPolicy.number}. {formPolicy.title}
                </h3>
                <p>{formPolicy.contentHead}</p>
                <ul>
                  {formPolicy.formPolicyDetailArray.map((formPolicyDetail) => (
                    <li key={formPolicyDetail.number}>
                      {formPolicyDetail.content}
                    </li>
                  ))}
                </ul>
                <p>{formPolicy.contentTail}</p>
              </div>
            ))}
          </div>
          <div className="agree-wrap">
            <input type="checkbox" id="check1" />
            <label htmlFor="check1">
              By checking here, I declare that I will abide by company policies.
            </label>
          </div>
          <NavigationButton
            prevPath={`/papers/contract-form/${companyName}/personal`}
            nextPath={`/papers/contract-form/${companyName}/agree`}
            currentPage={3}
          />
        </div>
      </div>
    </section>
  );
}
