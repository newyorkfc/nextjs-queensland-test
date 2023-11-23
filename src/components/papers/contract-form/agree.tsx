import { IsReadEnum } from "app/papers/new-contract/model";
import { updateIsRead } from "helpers/papers/new-contract/updateIsRead";

export default function Agree({
  newContract,
  contractForm,
  isRead,
  setIsRead,
  isSubmitDisabled,
  setIsSubmitDisabled,
}) {
  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, "0")}/${String(
    today.getMonth() + 1
  ).padStart(2, "0")}/${today.getFullYear()}`;

  const handleAgreeIsRead = () => {
    updateIsRead(isRead, setIsRead, setIsSubmitDisabled, IsReadEnum.agree);
  };

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
                <em className="input-line">{contractForm.company.name}</em>
                (Employer)
              </span>
            </dt>
            <dd className="Employee">
              <span>and</span>
              <span className="input-wrap">
                <em className="input-line">
                  {newContract.worker.firstName && newContract.worker.lastName
                    ? `${newContract.worker.firstName} ${newContract.worker.lastName}`
                    : ""}
                </em>
                (Employee)
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
            {contractForm.agreeArray.map((formAgree) => (
              <li key={formAgree.number}>
                {Number(formAgree.number) > 0 ? `${formAgree.number}. ` : null}
                {formAgree.content}
              </li>
            ))}
          </ol>
          <div className="agree-wrap">
            <input
              type="checkbox"
              id="agreeIsRead"
              value={isRead.agree}
              onChange={handleAgreeIsRead}
            />
            <label htmlFor="agreeIsRead">
              I have read and understood the above agreement.
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
