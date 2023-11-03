import { CompanyVO } from "app/systems/company/model";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CompanyList() {
  const router = useRouter();
  const [companies, setCompanies] = useState<Array<CompanyVO>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/systems/company?by=all`
        );
        setCompanies(response.data.array);
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
      <h1>Company List</h1>
      <table>
        <thead></thead>
        <tr>
          <th>name</th>
          <th>address</th>
          <th>url</th>
        </tr>
        <tbody>
          {companies.map((company, index) => {
            const url = `${process.env.NEXT_PUBLIC_FRONT_URL}/systems/company/${company.name}`;
            return (
              <tr key={index}>
                <td>{company.name}</td>
                <td>{company.address}</td>
                <td>
                  <Link href={url}>
                    {url}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {companies.length === 0 && (
            <tr>
              <td colSpan={3}>등록된 데이터가 없습니다.</td>
            </tr>
          )}
        </tfoot>
      </table>
    </>
  );
}
