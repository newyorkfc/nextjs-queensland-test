import {
  EditableContractFormVO,
  FormScheduleItemVO,
} from "app/papers/contract-form/model";
import { Dispatch, SetStateAction } from "react";

export default function ScheduleEdit({
  editableContractForm,
  setEditableContractForm,
}: {
  editableContractForm: EditableContractFormVO;
  setEditableContractForm: Dispatch<SetStateAction<EditableContractFormVO>>;
}) {
  const handleOnChange = (
    index: number,
    formSchedule: FormScheduleItemVO,
    key: keyof FormScheduleItemVO,
    value: string
  ) => {
    const updatedArray = [...editableContractForm.scheduleArray];
    updatedArray[index] = {
      ...formSchedule,
      [key]: value,
    };
    setEditableContractForm({
      ...editableContractForm,
      scheduleArray: updatedArray,
    });
  };

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
                value={"01/01/2000"}
                readOnly
              />
            </div>
            <div className="form-wrap">
              <label htmlFor="input1">Property Name</label>
              <input
                type="text"
                className="input-box"
                id="input1"
                value={"<CompanyName>"}
                readOnly
              />
            </div>
            <div className="form-wrap">
              <label htmlFor="input1">Property Address</label>
              <input
                type="text"
                className="input-box"
                id="input1"
                value={"<CompanyAddress>"}
                readOnly
              />
            </div>
          </div>
          <h3 className="h3">PIECEWORK RATES</h3>
          {editableContractForm.scheduleArray.map((formSchedule, index) => (
            <dl key={formSchedule.number}>
              <dt>
                <input
                  value={formSchedule.title}
                  onChange={(e) => {
                    handleOnChange(
                      index,
                      formSchedule,
                      "title",
                      e.target.value
                    );
                  }}
                />
              </dt>
              <dd>
                <ul className="ulist-type1">
                  <li>
                    <input
                      value={formSchedule.content1}
                      onChange={(e) => {
                        handleOnChange(
                          index,
                          formSchedule,
                          "content1",
                          e.target.value
                        );
                      }}
                    />
                  </li>
                  <li>
                    <input
                      value={formSchedule.content2}
                      onChange={(e) => {
                        handleOnChange(
                          index,
                          formSchedule,
                          "content2",
                          e.target.value
                        );
                      }}
                    />
                  </li>

                  <ul>
                    <li>
                      <input
                        value={formSchedule.content21}
                        onChange={(e) => {
                          handleOnChange(
                            index,
                            formSchedule,
                            "content21",
                            e.target.value
                          );
                        }}
                      />
                    </li>
                    <li>
                      <input
                        value={formSchedule.content22}
                        onChange={(e) => {
                          handleOnChange(
                            index,
                            formSchedule,
                            "content22",
                            e.target.value
                          );
                        }}
                      />
                    </li>
                  </ul>
                </ul>
              </dd>
            </dl>
          ))}
        </div>
      </div>
    </section>
  );
}
