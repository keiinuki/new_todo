import { createContext } from "react";

export const UserInfoContext = createContext({});

export const UserInfoProvider = (props) => {
  const { children } = props;
  const userInfo =  { id:1, name:"いぬき"};
  return (
    <UserInfoContext.Provider value={{ userInfo }}>
      {children}
    </UserInfoContext.Provider>
  );
};