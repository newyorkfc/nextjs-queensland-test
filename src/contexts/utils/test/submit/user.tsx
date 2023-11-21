import { UserVO } from "app/utils/test/submit/user";
import { createContext } from "react";
import React, { useState } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState<UserVO>({
    name: { firstName: null, lastName: null },
    contact: { phone: null, email: null },
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
