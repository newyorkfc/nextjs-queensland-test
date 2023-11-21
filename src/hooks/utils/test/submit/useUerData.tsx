import { UserVO } from "app/utils/test/submit/user";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useUserData = (): [UserVO, Dispatch<SetStateAction<UserVO>>] => {
  const [userData, setUserData] = useState<UserVO>(defaultUserData);

  useEffect(() => {
    const savedData = sessionStorage.getItem("userData");
    if (savedData && savedData !== JSON.stringify(defaultUserData)) {
      const parsedData = JSON.parse(savedData);
      setUserData(parsedData);
    }
  }, []);

  return [userData, setUserData];
};

const defaultUserData: UserVO = {
  name: {
    firstName: null,
    lastName: null,
  },
  contact: {
    phone: null,
    email: null,
  },
  memo: null,
};
