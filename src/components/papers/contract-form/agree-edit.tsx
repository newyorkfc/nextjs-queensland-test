import {
  EditableContractFormVO,
  FormAgreeItemVO,
} from "app/papers/contract-form/model";
import { Dispatch, SetStateAction } from "react";

export default function AgreeEdit({
  editableContractForm,
  setEditableContractForm,
}: {
  editableContractForm: EditableContractFormVO;
  setEditableContractForm: Dispatch<SetStateAction<EditableContractFormVO>>;
}) {
  const handleOnChange = (
    index: number,
    formAgree: FormAgreeItemVO,
    value: string
  ) => {
    const updatedArray = [...editableContractForm.agreeArray];
    updatedArray[index] = {
      ...formAgree,
      content: value,
    };
    setEditableContractForm({
      ...editableContractForm,
      agreeArray: updatedArray,
    });
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
                <em className="input-line">{"<CompanyName>"}</em>
                (Employer)
              </span>
            </dt>
            <dd className="Employee">
              <span>and</span>
              <span className="input-wrap">
                <em className="input-line">{"<Employee Name>"}</em>
                (Employee)
              </span>
            </dd>
            <dd>
              <span>at</span>
              <span className="input-wrap">
                <em className="input-line">{"01/01/2000"}</em> (Effective Date)
              </span>
            </dd>
          </dl>
          <ol className="olist-type1">
            {editableContractForm.agreeArray.map((formAgree, index) => (
              <li key={formAgree.number}>
                {Number(formAgree.number) > 0 ? `${formAgree.number}. ` : null}
                <input
                  value={formAgree.content}
                  onChange={(e) => {
                    handleOnChange(index, formAgree, e.target.value);
                  }}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
