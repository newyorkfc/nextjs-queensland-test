import { FormAgreeVO } from "app/papers/contract-form/model";
import axios from "axios";
import NavigationButton from "components/papers/contract-form/navigation-button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Agree() {
  const router = useRouter();
  const companyName = router.query.companyName;
  const name = "더미이름";
  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, "0")}/${String(
    today.getMonth() + 1
  ).padStart(2, "0")}/${today.getFullYear()}`;

  const [formAgrees, setFormAgrees] = useState<Array<FormAgreeVO>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/papers/contract-form?by=agree`
        );
        setFormAgrees(response.data.array);
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
          <h1 className="h1">Piecework Agreement</h1>
        </div>
        <div className="content">
          <dl>
            <dt className="employer">
              <span>Agreement Between</span>
              <span className="input-wrap">
                <em className="input-line">{companyName}</em>
                (Employer)
              </span>
            </dt>
            <dd className="Employee">
              <span>and</span>
              <span className="input-wrap">
                <em className="input-line">{name}</em> (Employee)
              </span>
            </dd>
            <dd>
              <span>at</span>
              <span className="input-wrap">
                <em className="input-line">{formattedDate}</em> (Effective Date)
              </span>
            </dd>
          </dl>
          <ol className="olist-type1">
            {formAgrees.map((formAgree) => (
              <li key={formAgree.number}>
                {Number(formAgree.number) > 0 ? `${formAgree.number}. ` : null}
                {formAgree.content}
              </li>
            ))}
          </ol>
          <div className="agree-wrap">
            <input type="checkbox" id="check1" />
            <label htmlFor="check1">
              I have read and understood the above agreement.
            </label>
          </div>
        </div>
        <NavigationButton
          prevPath={`/papers/contract-form/${companyName}/policy`}
          nextPath={`/papers/contract-form/${companyName}/schedule`}
          currentPage={4}
        />
      </div>
    </section>
  );
}
