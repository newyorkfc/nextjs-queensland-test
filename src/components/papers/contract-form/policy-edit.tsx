import {
  EditableContractFormVO,
  FormPolicyDetailItemVO,
  FormPolicyItemVO,
} from "app/papers/contract-form/model";
import { Dispatch, SetStateAction } from "react";

export default function PolicyEdit({
  editableContractForm,
  setEditableContractForm,
}: {
  editableContractForm: EditableContractFormVO;
  setEditableContractForm: Dispatch<SetStateAction<EditableContractFormVO>>;
}) {
  const handleTitleChange = (
    policyIndex: number,
    formPolicy: FormPolicyItemVO,
    titleValue: string
  ) => {
    const updatedArray = [...editableContractForm.policyArray];
    updatedArray[policyIndex] = {
      ...formPolicy,
      title: titleValue,
    };
    setEditableContractForm({
      ...editableContractForm,
      policyArray: updatedArray,
    });
  };

  const handleContentHeadChange = (
    policyIndex: number,
    formPolicy: FormPolicyItemVO,
    contentHeadValue: string
  ) => {
    const updatedArray = [...editableContractForm.policyArray];
    updatedArray[policyIndex] = {
      ...formPolicy,
      contentHead: contentHeadValue,
    };
    setEditableContractForm({
      ...editableContractForm,
      policyArray: updatedArray,
    });
  };

  const handleContentChange = (
    policyIndex: number,
    policyDetailIndex: number,
    formPolicy: FormPolicyItemVO,
    formPolicyDetail: FormPolicyDetailItemVO,
    contentValue: string
  ) => {
    const updatedArray = [...editableContractForm.policyArray];
    updatedArray[policyIndex] = {
      ...formPolicy,
      formPolicyDetailArray: [...formPolicy.formPolicyDetailArray],
    };
    updatedArray[policyIndex].formPolicyDetailArray[policyDetailIndex] = {
      ...formPolicyDetail,
      content: contentValue,
    };
    setEditableContractForm({
      ...editableContractForm,
      policyArray: updatedArray,
    });
  };
  const handleContentTailChange = (
    policyIndex: number,
    formPolicy: FormPolicyItemVO,
    contentTailValue: string
  ) => {
    const updatedArray = [...editableContractForm.policyArray];
    updatedArray[policyIndex] = {
      ...formPolicy,
      contentTail: contentTailValue,
    };
    setEditableContractForm({
      ...editableContractForm,
      policyArray: updatedArray,
    });
  };

  return (
    <section className="paper">
      <div className="container">
        <div className="tit-area">
          <h1 className="h1">{"<CompanyName>"} Policies</h1>
        </div>
        <div className="content">
          <div className="col-wrap">
            <div className=" col">
              {editableContractForm.policyArray.map(
                (formPolicy, policyIndex) => (
                  <div key={formPolicy.number}>
                    <h3 className="h3">
                      {formPolicy.number}. {"(title) "}
                      <input
                        value={formPolicy.title}
                        onChange={(e) =>
                          handleTitleChange(
                            policyIndex,
                            formPolicy,
                            e.target.value
                          )
                        }
                      />
                    </h3>
                    <p>
                      {"(contentHead) "}
                      <input
                        value={formPolicy.contentHead}
                        onChange={(e) => {
                          handleContentHeadChange(
                            policyIndex,
                            formPolicy,
                            e.target.value
                          );
                        }}
                      />
                    </p>
                    <ul>
                      {formPolicy.formPolicyDetailArray.map(
                        (formPolicyDetail, policyDetailIndex) => (
                          <li key={formPolicyDetail.number}>
                            {"(content) "}
                            <input
                              value={formPolicyDetail.content}
                              onChange={(e) => {
                                handleContentChange(
                                  policyIndex,
                                  policyDetailIndex,
                                  formPolicy,
                                  formPolicyDetail,
                                  e.target.value
                                );
                              }}
                            />
                          </li>
                        )
                      )}
                    </ul>
                    <p>
                      {"(contentTail) "}
                      <input
                        value={formPolicy.contentTail}
                        onChange={(e) => {
                          handleContentTailChange(
                            policyIndex,
                            formPolicy,
                            e.target.value
                          );
                        }}
                      />
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
