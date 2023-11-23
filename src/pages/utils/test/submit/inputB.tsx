import { UserVO } from "app/utils/test/submit/user";
import axios from "axios";
import { updateUserData } from "helpers/utils/test/updateUserData";
import { useUserData } from "hooks/utils/test/submit/useUerData";
import { Dispatch, SetStateAction } from "react";

export default function InputB() {
  const [userData, setUserData]: [UserVO, Dispatch<SetStateAction<UserVO>>] =
    useUserData();

  const handlePhoneChange = (e) => {
    updateUserData(userData, setUserData, {
      contact: { ...userData.contact, phone: e.target.value },
    });
  };

  const handleEmailChange = (e) => {
    updateUserData(userData, setUserData, {
      contact: { ...userData.contact, email: e.target.value },
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/test`,
        userData
      );
      console.log(response.data);
    } catch (error) {
      alert(error);
    } finally {
      sessionStorage.removeItem("userData");
    }
  };

  return (
    <>
      <dl>
        <dt>
          <label htmlFor="phone">phone</label>
        </dt>
        <dd>
          <input
            type="text"
            id="phone"
            value={userData.contact.phone || ""}
            onChange={handlePhoneChange}
          />
        </dd>
        <dt>
          <label htmlFor="email">email</label>
        </dt>
        <dd>
          <input
            type="text"
            id="email"
            value={userData.contact.email || ""}
            onChange={handleEmailChange}
          />
        </dd>
      </dl>
      <button onClick={handleSubmit}>submit</button>
    </>
  );
}
