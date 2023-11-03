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
  const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
  
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
    <>
      <h1>Piecework Agreement</h1>
      <div>
        <p>Agreement Between {companyName} (Employer) and {name} (Employee) at {formattedDate} (Effective Date)</p>
      </div>
      <div>
        {formAgrees.map((formAgree)=>(
          <div key={formAgree.number}>
            <p>{(Number(formAgree.number) > 0) ? `${formAgree.number}. ` : null}{formAgree.content}</p>
          </div>
        ))}
      </div>
      <div>
        <input type="checkbox"/> I have read and understood the above agreement.
      </div>
      <NavigationButton
        prevPath={`/papers/contract-form/${companyName}/policy`}
        nextPath={`/papers/contract-form/${companyName}/schedule`}
        currentPage={4}
      />
    </>
  );
}
