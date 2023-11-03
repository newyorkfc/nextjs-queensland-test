import { WorkerVO } from "app/customers/worker/model";
import axios from "axios";
import { useEffect, useState } from "react";

export default function WorkerList() {
  const [workers, setWorkers] = useState<Array<WorkerVO>>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/customers/worker?by=all`
        );
        setWorkers(response.data.array);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });

  return <></>;
}
