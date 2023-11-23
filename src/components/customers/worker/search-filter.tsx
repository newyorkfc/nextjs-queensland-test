import {
    WorkerFilterVO,
  WorkerSearchParam,
  WorkerViewVO,
  defaultWorkerFilter,
} from "app/customers/worker/model";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

export default function SearchFilter({
  setWorkers,
}: {
  setWorkers: Dispatch<SetStateAction<WorkerViewVO[]>>;
}) {
  const [filter, setFilter] = useState<WorkerFilterVO>(defaultWorkerFilter);
  const handleSearchOnclick = () => {
    const fetchData = async () => {
      try {
        await axios
          .post(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/customers/worker?do=srch`,
            filter
          )
          .then((response) => {
            setWorkers(response.data.array);
          });
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  };
  return (
    <div>
      <span>Filter</span>
      {["all", "team", "name"].map((searchParam) => (
        <label key={searchParam}>
          <input
            type="radio"
            id="searchParam"
            value={searchParam}
            checked={searchParam === filter.searchParam}
            onChange={(e) => {
              setFilter({
                ...filter,
                searchParam: e.target.value as WorkerSearchParam,
              });
            }}
          />
          <span>{searchParam}</span>
        </label>
      ))}
      <input
        type="text"
        placeholder="keyword"
        value={filter.searchKeyword}
        onChange={(e) => {
          setFilter({ ...filter, searchKeyword: e.target.value });
        }}
      />
      <button onClick={handleSearchOnclick}>Search</button>
      <button
        onClick={() => {
          setFilter(defaultWorkerFilter);
        }}
      >
        Reset
      </button>
    </div>
  );
}
