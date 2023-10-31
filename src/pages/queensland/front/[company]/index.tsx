import { RootState } from "pages/queensland/app/store";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Company() {
  const selectedCompany = useSelector(
    (state: RootState) => state.company.selectedCompany
  );
  return (
    <>
      <h1>{selectedCompany.name}</h1>
      <br />
      <Link href={`/queensland/front/${selectedCompany.name}/contract`}>
        <button>
          <h3>계약서 작성</h3>
        </button>
      </Link>
    </>
  );
}
