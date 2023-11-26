import {
  WorkerSortOrder,
  WorkerViewEnum,
  WorkerViewVO,
} from "app/customers/worker/model";
import { useRouter } from "next/router";
import { useState } from "react";

export default function WorkerTable({ workers }: { workers: WorkerViewVO[] }) {
  const router = useRouter();
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: WorkerSortOrder;
  }>({ key: "", direction: "" });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 50;
  const blockSize = 10;
  const totalPage = Math.ceil(workers.length / pageSize);

  const sortedWorkers = [...workers].sort((a, b) => {
    if (!sortConfig.key) return 0;
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const currentTableData = sortedWorkers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const startPage = Math.floor((currentPage - 1) / blockSize) * blockSize + 1;
  const endPage = Math.min(startPage + blockSize - 1, totalPage);
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        style={{ fontWeight: i === currentPage ? "bold" : "normal" }}
      >
        {i}
      </button>
    );
  }

  const requestSort = (key: string) => {
    let direction: WorkerSortOrder = "";
    if (sortConfig.key !== key) {
      direction = "asc";
    } else {
      if (sortConfig.direction === "asc") {
        direction = "desc";
      } else if (sortConfig.direction === "desc") {
        direction = "";
      } else {
        direction = "asc";
      }
    }
    setSortConfig({ key, direction });
  };

  const getSortDirectionIcon = (key: string): string => {
    if (sortConfig.key === key) {
      switch (sortConfig.direction) {
        case "asc":
          return "▲";
        case "desc":
          return "▼";
        default:
          return "▽";
      }
    }
    return "▽";
  };

  return (
    <>
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
              <th onClick={() => requestSort(WorkerViewEnum.locationName)}>
                Location{getSortDirectionIcon(WorkerViewEnum.locationName)}
              </th>
              <th
                className="tal"
                onClick={() => requestSort(WorkerViewEnum.farmName)}
              >
                Farm{getSortDirectionIcon(WorkerViewEnum.farmName)}
              </th>
              <th
                className="tal"
                onClick={() => requestSort(WorkerViewEnum.teamName)}
              >
                Team{getSortDirectionIcon(WorkerViewEnum.teamName)}
              </th>
              <th
                className="tal"
                onClick={() => requestSort(WorkerViewEnum.firstName)}
              >
                NAME{getSortDirectionIcon(WorkerViewEnum.firstName)}
              </th>
              <th
                className="tal"
                onClick={() => requestSort(WorkerViewEnum.englishName)}
              >
                NICK NAME{getSortDirectionIcon(WorkerViewEnum.englishName)}
              </th>
              <th onClick={() => requestSort(WorkerViewEnum.bsb)}>
                BSB{getSortDirectionIcon(WorkerViewEnum.bsb)}
              </th>
              <th onClick={() => requestSort(WorkerViewEnum.accountNumber)}>
                ACCOUNT NUMBER
                {getSortDirectionIcon(WorkerViewEnum.accountNumber)}
              </th>
              <th
                className="tal"
                onClick={() => requestSort(WorkerViewEnum.email)}
              >
                E-MAIL{getSortDirectionIcon(WorkerViewEnum.email)}
              </th>
              <th onClick={() => requestSort(WorkerViewEnum.cellPhone)}>
                CONTACT NUMBER{getSortDirectionIcon(WorkerViewEnum.cellPhone)}
              </th>
              <th onClick={() => requestSort(WorkerViewEnum.taxFileNumber)}>
                TFN (TAX FILE NUMBER)
                {getSortDirectionIcon(WorkerViewEnum.taxFileNumber)}
              </th>
              <th onClick={() => requestSort(WorkerViewEnum.birthDate)}>
                DOB{getSortDirectionIcon(WorkerViewEnum.birthDate)}
              </th>
              <th onClick={() => requestSort(WorkerViewEnum.gender)}>
                Sex {getSortDirectionIcon(WorkerViewEnum.gender)}
              </th>
              <th onClick={() => requestSort(WorkerViewEnum.nationality)}>
                National{getSortDirectionIcon(WorkerViewEnum.nationality)}
              </th>
              <th onClick={() => requestSort(WorkerViewEnum.passportNumber)}>
                PASSPORT NUMBER
                {getSortDirectionIcon(WorkerViewEnum.passportNumber)}
              </th>
              <th onClick={() => requestSort(WorkerViewEnum.visaGrantNumber)}>
                VISA GRANT NUMBER
                {getSortDirectionIcon(WorkerViewEnum.visaGrantNumber)}
              </th>
              <th
                className="tal"
                onClick={() => requestSort(WorkerViewEnum.fundName)}
              >
                SUPERANNUATION NAME
                {getSortDirectionIcon(WorkerViewEnum.fundName)}
              </th>
              <th onClick={() => requestSort(WorkerViewEnum.memberNumber)}>
                SUPERANNUATION NUMBER
                {getSortDirectionIcon(WorkerViewEnum.memberNumber)}
              </th>
              <th
                className="tal"
                onClick={() => requestSort(WorkerViewEnum.address)}
              >
                Address{getSortDirectionIcon(WorkerViewEnum.address)}
              </th>
              <th onClick={() => requestSort(WorkerViewEnum.startDate)}>
                Start Date{getSortDirectionIcon(WorkerViewEnum.startDate)}
              </th>
              <th onClick={() => requestSort(WorkerViewEnum.endDate)}>
                End Date{getSortDirectionIcon(WorkerViewEnum.endDate)}
              </th>
              <th onClick={() => requestSort(WorkerViewEnum.tax)}>
                Tax{getSortDirectionIcon(WorkerViewEnum.tax)}
              </th>
              <th onClick={() => requestSort(WorkerViewEnum.farmNumber)}>
                Farm No.{getSortDirectionIcon(WorkerViewEnum.farmNumber)}
              </th>
              <th
                className="tal"
                onClick={() => requestSort(WorkerViewEnum.memo)}
              >
                Memo{getSortDirectionIcon(WorkerViewEnum.memo)}
              </th>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((worker, index) => {
              return (
                <tr key={index} id={worker.id}>
                  <td>{index + 1}</td>
                  <td id={worker.locationId}>{worker.locationName}</td>
                  <td className="tal" id={worker.farmId}>
                    {worker.farmName}
                  </td>
                  <td id={worker.teamId}>{worker.teamName}</td>
                  <td
                    className="tal"
                    onClick={() => {
                      router.push(`/customers/worker/${worker.id}`);
                    }}
                  >
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
      <div className="pagination">
        <button onClick={() => setCurrentPage(1)}>First</button>
        <button
          onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}
        >
          {"<"}
        </button>
        {pages}
        <button
          onClick={() =>
            currentPage !== totalPage && setCurrentPage(currentPage + 1)
          }
        >
          {">"}
        </button>
        <button onClick={() => setCurrentPage(totalPage)}>Last</button>
      </div>
    </>
  );
}
