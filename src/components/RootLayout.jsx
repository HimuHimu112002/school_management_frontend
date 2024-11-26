import TopBar from "./TopBar";
import LeftSideBar from "./LeftSideBar";
import { getToken } from "../utility/storageUtility";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const RootLayout = () => {
  let navigate = useNavigate();
  let token = getToken();
  useEffect(() => {
    if (!token) {
      navigate("/sign-in");
    }
  }, []);
  return (
    <div>
      <TopBar />
      <LeftSideBar />
    </div>
  );
};

export default RootLayout;
