import { UserVO } from "app/utils/test/submit/user";
import { updateUserData } from "helpers/utils/test/updateUserData";
import { useUserData } from "hooks/utils/test/submit/useUerData";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

export default function InputA() {
  const router = useRouter();
  const [userData, setUserData]: [UserVO, Dispatch<SetStateAction<UserVO>>] =
    useUserData();

  const handleFirstNameChange = (e) => {
    updateUserData(userData, setUserData, {
      name: { ...userData.name, firstName: e.target.value },
    });
  };

  const handleLastNameChange = (e) => {
    updateUserData(userData, setUserData, {
      name: { ...userData.name, lastName: e.target.value },
    });
  };

  return (
    <>
      <dl>
        <dt>
          <label htmlFor="firstName">First Name</label>
        </dt>
        <dd>
          <input
            type="text"
            id="firstName"
            value={userData.name.firstName || ""}
            onChange={handleFirstNameChange}
          />
        </dd>
        <dt>
          <label htmlFor="lastName">Last Name</label>
        </dt>
        <dd>
          <input
            type="text"
            id="lastName"
            value={userData.name.lastName || ""}
            onChange={handleLastNameChange}
          />
        </dd>
      </dl>
      <button
        onClick={() => {
          router.push("/utils/test/submit/inputB");
          updateUserData(userData, setUserData, { memo: "test memo" });
        }}
      >
        next page
      </button>
    </>
  );
}
