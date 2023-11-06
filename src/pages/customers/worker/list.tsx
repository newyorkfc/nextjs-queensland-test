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
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Worker List</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Location</th>
            <th>Farm</th>
            <th>Team</th>
            <th>NAME</th>
            <th>NICK NAME</th>
            <th>BSB</th>
            <th>ACCOUNTNUMBER</th>
            <th>E-MAIL</th>
            <th>CONTACT NUMBER</th>
            <th>TFN(TAX FILE NUMBER)</th>
            <th>DOB</th>
            <th>Sex</th>
            <th>National</th>
            <th>PASSPORT NUMBER</th>
            <th>VISA GRANT NUMBER</th>
            <th>SUPERANNUATION NAME</th>
            <th>SUPERANNUATION NUMBER</th>
            <th>Address</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Tax</th>
            <th>Farm No.</th>
            <th>Memo</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((worker, index) => {
            return (
              <tr key={index} id={worker.id}>
                <td>{index + 1}</td>
                <td id={worker.locationId}>{worker.locationName}</td>
                <td id={worker.farmId}>{worker.farmName}</td>
                <td id={worker.teamId}>{worker.teamName}</td>
                <td>{worker.firstName + " " + worker.lastName}</td>
                <td>{worker.englishName}</td>
                <td>{worker.bsb}</td>
                <td>{worker.accountNumber}</td>
                <td>{worker.email}</td>
                <td>{worker.cellPhone}</td>
                <td>{worker.taxFileNumber}</td>
                <td>{worker.birthDate}</td>
                <td>{worker.gender}</td>
                <td>{worker.nationality}</td>
                <td>{worker.passportNumber}</td>
                <td>{worker.visaGrantNumber}</td>
                <td>{worker.fundName}</td>
                <td>{worker.memberNumber}</td>
                <td>{worker.address}</td>
                <td>{worker.startDate}</td>
                <td>{worker.endDate}</td>
                <td>{worker.tax}</td>
                <td>{worker.farmNumber}</td>
                <td>{worker.memo}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {workers.length === 0 && (
            <tr>
              <td colSpan={24}>등록된 데이터가 없습니다.</td>
            </tr>
          )}
        </tfoot>
      </table>
    </>
  );
}
