import { WorkerViewVO } from "app/customers/worker/model";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function WorkerList() {
  const router = useRouter();
  const [workers, setWorkers] = useState<Array<WorkerViewVO>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/customers/worker?by=all`
        );
        setWorkers(response.data.array);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <></>;
}
