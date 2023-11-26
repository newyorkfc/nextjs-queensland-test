import {
  EditableContractFormVO,
  FormGuidelineItemVO,
} from "app/papers/contract-form/model";
import { Dispatch, SetStateAction } from "react";

export default function GuidelineEdit({
  editableContractForm,
  setEditableContractForm,
}: {
  editableContractForm: EditableContractFormVO;
  setEditableContractForm: Dispatch<SetStateAction<EditableContractFormVO>>;
}) {
  const handleOnChange = (
    index: number,
    formGuideline: FormGuidelineItemVO,
    key: keyof FormGuidelineItemVO,
    value: string
  ) => {
    const updatedArray = [...editableContractForm.guidelineArray];
    updatedArray[index] = {
      ...formGuideline,
      [key]: value,
    };
    setEditableContractForm({
      ...editableContractForm,
      guidelineArray: updatedArray,
    });
  };

  return (
    <section className="paper guideline">
      <div className="container">
        <div className="tit-area">
          <h1 className="h1">Work Health & Safety Guidelines</h1>
        </div>
        <div className="content">
          <div className="col-wrap">
            <div className="col">
              {editableContractForm.guidelineArray.map(
                (formGuideline, index) => (
                  <div key={formGuideline.number}>
                    <h3 className="h3">
                      {formGuideline.number}.{" "}
                      <input
                        value={formGuideline.title}
                        onChange={(e) =>
                          handleOnChange(
                            index,
                            formGuideline,
                            "title",
                            e.target.value
                          )
                        }
                      />
                    </h3>
                    <p
                      style={{
                        whiteSpace: "pre-line",
                      }}
                    >
                      <input
                        value={formGuideline.content}
                        onChange={(e) =>
                          handleOnChange(
                            index,
                            formGuideline,
                            "content",
                            e.target.value
                          )
                        }
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
