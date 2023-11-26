import { WorkerVO } from "app/customers/worker/model";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function WorkerDetail() {
  const router = useRouter();
  const workerId = router.query.id;

  const [worker, setWorker] = useState<WorkerVO>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/customers/worker?id=${workerId}`)
          .then((response) => {
            setWorker(response.data.json);
          });
      } catch (error) {
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [workerId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Worker Detail</h1>
      <p>Worker ID: {workerId}</p>
    </>
  );
}
