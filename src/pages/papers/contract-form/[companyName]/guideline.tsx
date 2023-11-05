import { FormGuidelineVO } from "app/papers/contract-form/model";
import axios from "axios";
import NavigationButton from "components/papers/contract-form/navigation-button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Guideline() {
  const router = useRouter();
  const companyName = router.query.companyName;

  const [formGuidelines, setFormGuidelines] = useState<Array<FormGuidelineVO>>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/papers/contract-form?by=guideline`
        );
        setFormGuidelines(response.data.array);
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
    <section className="paper guideline">
      <div className="container">
        <div className="tit-area">
          <h1 className="h1">Work Health & Safety Guidelines</h1>
        </div>
        <div className="content">
          <div className="col">
            {formGuidelines.map((formGuideline) => (
              <div key={formGuideline.number}>
                <p
                  style={{
                    whiteSpace: "pre-line",
                  }}
                >
                  {formGuideline.number}. {formGuideline.title}
                  <br />
                  {formGuideline.content}
                </p>
              </div>
            ))}
          </div>

          <div className="agree-wrap">
            <input type="checkbox" id="check1" />
            <label htmlFor="check1">I have read and understood.</label>
          </div>
        </div>
        <NavigationButton
          prevPath={`/papers/contract-form/${companyName}/schedule`}
          nextPath={`/papers/contract-form/${companyName}/checklist`}
          currentPage={6}
        />
      </div>
    </section>
  );
}
