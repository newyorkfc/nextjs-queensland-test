import { useRouter } from "next/router";

export default function Company() {
  const router = useRouter();
  const companyName = router.query.companyName;
  return (
    <>
      <h1>{companyName}</h1>
      <button
        onClick={() => {
          router.push(`/papers/contract-form/${companyName}/pdf`);
        }}
      >
        Write Contract
      </button>
    </>
  );
}
