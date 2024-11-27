import TopBar from "./TopBar";
import LeftSideBar from "./LeftSideBar";
import { getToken, setToken, setUserRoll } from "../utility/storageUtility";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const RootLayout = () => {
  let navigate = useNavigate();

  // when user login google then token and roll get params and store cookie and localstorage
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const roll = params.get("roll");
    if (token || roll) {
      setToken(token);
      setUserRoll(roll);
    }
  }, [navigate]);


  // check user valid or unvalid
  useEffect(() => {
    let token = getToken();
    if (!token) {
      navigate("/sign-in");
    }
  }, [navigate]);

  return (
    <div>
      <TopBar />
      <LeftSideBar />
    </div>
  );
};

export default RootLayout;
