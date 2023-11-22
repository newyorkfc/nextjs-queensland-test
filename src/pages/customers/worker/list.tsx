import { WorkerViewVO } from "app/customers/worker/model";
import axios from "axios";
import ExcelUpload from "components/customers/worker/excel-upload";
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
    <section className="office">
      <h1>Worker List</h1>
      <div className="tbl-list">
        <table>
          <colgroup>
            <col style={{ width: "4rem" }} />
            <col style={{ width: "10rem" }} />
            <col style={{ width: "12rem" }} />
            <col style={{ width: "10rem" }} />
            <col style={{ width: "16rem" }} />
            <col style={{ width: "10rem" }} />
            <col style={{ width: "10rem" }} />
            <col style={{ width: "9em" }} />
            <col style={{ width: "18rem" }} />
            <col style={{ width: "10rem" }} />
            <col style={{ width: "10rem" }} />
            <col style={{ width: "10rem" }} />
            <col style={{ width: "8rem" }} />
            <col style={{ width: "10rem" }} />
            <col style={{ width: "10rem" }} />
            <col style={{ width: "10rem" }} />
            <col style={{ width: "16rem" }} />
            <col style={{ width: "16rem" }} />
            <col style={{ width: "24rem" }} />
            <col style={{ width: "10rem" }} />
            <col style={{ width: "10rem" }} />
            <col style={{ width: "8rem" }} />
            <col style={{ width: "8rem" }} />
            <col style={{ width: "16rem" }} />
          </colgroup>
          <thead>
            <tr>
              <th>No.</th>
              <th>Location</th>
              <th className="tal">Farm</th>
              <th className="tal">Team</th>
              <th className="tal">NAME</th>
              <th className="tal">NICK NAME</th>
              <th>BSB</th>
              <th>ACCOUNT NUMBER</th>
              <th className="tal">E-MAIL</th>
              <th>CONTACT NUMBER</th>
              <th>TFN (TAX FILE NUMBER)</th>
              <th>DOB</th>
              <th>Sex</th>
              <th>National</th>
              <th>PASSPORT NUMBER</th>
              <th>VISA GRANT NUMBER</th>
              <th className="tal">SUPERANNUATION NAME</th>
              <th>SUPERANNUATION NUMBER</th>
              <th className="tal">Address</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Tax</th>
              <th>Farm No.</th>
              <th className="tal">Memo</th>
            </tr>
          </thead>
          <tbody>
            {workers.map((worker, index) => {
              return (
                <tr key={index} id={worker.id}>
                  <td>{index + 1}</td>
                  <td id={worker.locationId}>{worker.locationName}</td>
                  <td className="tal" id={worker.farmId}>
                    {worker.farmName}
                  </td>
                  <td id={worker.teamId}>{worker.teamName}</td>
                  <td className="tal">
                    {worker.firstName + " " + worker.lastName}
                  </td>
                  <td className="tal">{worker.englishName}</td>
                  <td>{worker.bsb}</td>
                  <td>{worker.accountNumber}</td>
                  <td className="tal">{worker.email}</td>
                  <td>{worker.cellPhone}</td>
                  <td>{worker.taxFileNumber}</td>
                  <td>{worker.birthDate}</td>
                  <td>{worker.gender}</td>
                  <td>{worker.nationality}</td>
                  <td>{worker.passportNumber}</td>
                  <td>{worker.visaGrantNumber}</td>
                  <td className="tal">{worker.fundName}</td>
                  <td>{worker.memberNumber}</td>
                  <td className="tal">{worker.address}</td>
                  <td>{worker.startDate}</td>
                  <td>{worker.endDate}</td>
                  <td>{worker.tax}</td>
                  <td>{worker.farmNumber}</td>
                  <td className="tal">{worker.memo}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            {workers.length === 0 && (
              <tr>
                <td colSpan={24}>No data available</td>
              </tr>
            )}
          </tfoot>
        </table>
      </div>
      <ExcelUpload />
    </section>
  );
}
