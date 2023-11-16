import { useRouter } from "next/router";

export default function Login() {


  const router = useRouter();
  return (
    <>
      <h1>Login</h1>
      <div>
        <label htmlFor="name">ID: </label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="password">PASSWORD: </label>
        <input type="password" id="password" />
      </div>
      <div>
        <button
          onClick={() => {
            router.push("/systems/staff/home");
          }}
        >
          submit
        </button>
      </div>
    </>
  );
}
