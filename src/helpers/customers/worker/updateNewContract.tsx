import { WorkerDetailVO } from "app/customers/worker-detail/model";
import { Dispatch, SetStateAction } from "react";

export const updateWorkerDetail = (
  workerDetail: WorkerDetailVO,
  setWorkerDetail: Dispatch<SetStateAction<WorkerDetailVO>>,
  fieldKey: keyof WorkerDetailVO,
  updatedField: object
) => {
  const updatedWorkerDetail = {
    ...workerDetail,
    [fieldKey]: { ...workerDetail[fieldKey], ...updatedField },
  };
  setWorkerDetail(updatedWorkerDetail);
};
