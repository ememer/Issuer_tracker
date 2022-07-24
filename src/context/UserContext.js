import { createContext, useState } from "react";

import { avatarLists } from "../shared/avatarsLists";

const DEFAULT_USER = {
  DEFAULT_NAME: "Użytkownik",
  DEFAULT_AVATAR: 1,
};

export const UserContext = createContext({
  userName: DEFAULT_USER.DEFAULT_NAME,
  avatar: DEFAULT_USER.DEFAULT_AVATAR,
  avatarLists: avatarLists,
});

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(DEFAULT_USER.DEFAULT_NAME);
  const [avatar, setAvatar] = useState(DEFAULT_USER.DEFAULT_AVATAR);

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
        avatarLists,
        avatar,
        setAvatar,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
