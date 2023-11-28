import {
  WorkerDetailEnum,
  WorkerDetailVO,
} from "app/customers/worker-detail/model";
import { updateWorkerDetail } from "helpers/customers/worker/updateNewContract";
import { Dispatch, SetStateAction } from "react";

export default function StaffArea({
  workerDetail,
  setWorkerDetail,
}: {
  workerDetail: WorkerDetailVO;
  setWorkerDetail: Dispatch<SetStateAction<WorkerDetailVO>>;
}) {
  const handleTeamChange = (e) => {
    updateWorkerDetail(workerDetail, setWorkerDetail, WorkerDetailEnum.team, {
      id: e.target.value,
    });
  };

  const handleStartDateChange = (e) => {
    updateWorkerDetail(workerDetail, setWorkerDetail, WorkerDetailEnum.staffArea, {
      startDate: e.target.value,
    });
  };

  const handleEndDateChange = (e) => {
    updateWorkerDetail(workerDetail, setWorkerDetail, WorkerDetailEnum.staffArea, {
      endDate: e.target.value,
    });
  };

  const handleTaxChange = (e) => {
    updateWorkerDetail(workerDetail, setWorkerDetail, WorkerDetailEnum.staffArea, {
      tax: e.target.value,
    });
  };

  const handleFarmNumberChange = (e) => {
    updateWorkerDetail(workerDetail, setWorkerDetail, WorkerDetailEnum.staffArea, {
      farmNumber: e.target.value,
    });
  };

  const handleMemoChange = (e) => {
    updateWorkerDetail(workerDetail, setWorkerDetail, WorkerDetailEnum.staffArea, {
      memo: e.target.value,
    });
  };


  return (
    <section className="paper personal">
      <div className="container">
        <div className="tit-area">
          <h1 className="h1">Staff Area</h1>
        </div>
        <div className="content">
          <dl>
            <dt>
              <label htmlFor="company">Company</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box"
                id="company"
                value={workerDetail.company.name}
                readOnly
              />
            </dd>
          </dl>
          <dl>
            <dt>Team</dt>
            <dd>
              <select
                id="team"
                onChange={handleTeamChange}
                value={workerDetail.team.id}
              >
                {workerDetail.teamArray.map((team) => (
                  <option key={team.id} value={team.id}>
                    {team.name}
                  </option>
                ))}
              </select>
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="startDate">Start Date</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box"
                id="startDate"
                onChange={handleStartDateChange}
                value={workerDetail.staffArea.startDate}
              />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="endDate">End Date</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box"
                id="endDate"
                onChange={handleEndDateChange}
                value={workerDetail.staffArea.endDate}
              />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="tax">Tax</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box"
                id="tax"
                onChange={handleTaxChange}
                value={workerDetail.staffArea.tax}
              />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="farmNumber">Farm No.</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box"
                id="farmNumber"
                onChange={handleFarmNumberChange}
                value={workerDetail.staffArea.farmNumber}
              />
            </dd>
          </dl>
          <dl>
            <dt>
              <label htmlFor="memo">Memo</label>
            </dt>
            <dd>
              <input
                type="text"
                className="input-box"
                id="memo"
                onChange={handleMemoChange}
                value={workerDetail.staffArea.memo}
              />
            </dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
