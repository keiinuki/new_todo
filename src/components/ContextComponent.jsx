import { useContext } from "react";
import { UserInfoContext } from "./provider/UserInfoProvider";

export const ContextComponent = () => {
  const { userInfo } = useContext(UserInfoContext);
  return (
    <div>
      <ul>
      <li>{userInfo.id}</li>
      <li>{userInfo.name}</li>
      </ul>  
    </div>
  );
};