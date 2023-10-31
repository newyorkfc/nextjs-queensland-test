import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { setCompanies, setSelectedCompany } from "../reducer/companySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "pages/queensland/app/store";

export default function Front() {
  const dispatch = useDispatch();
  const companyArray = useSelector(
    (state: RootState) => state.company.companies
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/systems/company?by=all`
        );
        console.log("response.data:", JSON.stringify(response.data))
        dispatch(setCompanies(response.data.array));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <>
      <h1>FRONT</h1>
      <br />
      <ul>
        {companyArray.map((company) => (
          <li key={company.id}>
            <Link href={`/queensland/front/${company.name}`}>
              <button onClick={() => dispatch(setSelectedCompany(company))}>
                <h3>{company.name}</h3>
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
