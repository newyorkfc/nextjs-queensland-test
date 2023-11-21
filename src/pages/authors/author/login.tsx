import { useRouter } from "next/router";

export default function Login() {


  const router = useRouter();
  return (
    <div className="auth-page-wrapper">
      <div className="login">
        <h1>Login</h1>
        <div className="form-wrap">
          <label htmlFor="name">ID</label>
          <input type="text" id="name" className="input-box" />
        </div>
        <div className="form-wrap">
          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" className="input-box" />
        </div>
        <div>
          <button
            type="button"
            className="btn-login"
            onClick={() => {
              router.push("/systems/staff/home");
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
