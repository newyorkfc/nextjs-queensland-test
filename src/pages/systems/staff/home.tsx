import { useRouter } from "next/router";

export default function StaffHome() {
  const router = useRouter();
  return (
    <>
      <h1>Staff Home</h1>
      <ul>
        <li>
          <button onClick={()=>{router.push("/systems/company/list")}}>Manage Companies</button>
        </li>
        <li>
          <button>Manage Teams</button>
        </li>
        <li>
          <button onClick={()=>{router.push("/customers/worker/list")}}>Manage Workers</button>
        </li>
        <li>
          <button onClick={()=>{router.push("/papers/contract-form/edit")}}>Manage Contract Form</button>
        </li>
      </ul>
    </>
  );
}
