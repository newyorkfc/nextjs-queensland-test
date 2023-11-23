import {
  WorkerSortOrder,
  WorkerViewEnum,
  WorkerViewVO,
} from "app/customers/worker/model";
import axios from "axios";
import ExcelUpload from "components/customers/worker/excel-upload";
import SearchFilter from "components/customers/worker/search-filter";
import WorkerTable from "components/customers/worker/table";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function WorkerList() {
  const router = useRouter();
  const [workers, setWorkers] = useState<Array<WorkerViewVO>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/customers/worker?by=all`)
          .then((response) => {
            setWorkers(response.data.array);
            // PIXME : 테스트용 데이터
            let extendedArray = [];
            const targetLength = 1000;

            while (extendedArray.length < targetLength) {
              extendedArray = extendedArray.concat(response.data.array);
            }
            setWorkers(extendedArray);
            // 여기까지
          });
      } catch (error) {
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="office">
        <h1>Worker List</h1>
        <SearchFilter setWorkers={setWorkers} />
        <WorkerTable workers={workers} />
        <ExcelUpload />
      </section>
    </>
  );
}
