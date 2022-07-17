import { createContext, useState } from "react";

const DEFAULT_USER_NAME = "";

export const UserContext = createContext({
  userName: DEFAULT_USER_NAME,
});

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(DEFAULT_USER_NAME);
  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};
