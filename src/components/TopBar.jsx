import { Link, useNavigate } from "react-router-dom";
import { clearToken, GetUserRoll } from "../utility/storageUtility";
import { ToastContainer } from "react-toastify";

const TopBar = () => {
  let navigate = useNavigate();
  let roll = GetUserRoll();
  let handleLogout = () => {
    clearToken();
    navigate("/sign-in");
  };
  return (
    <div className="bg-[#F100B7] w-full h-20 flex justify-between sticky top-0 z-10">
      <ToastContainer position="top-right" theme="light" />
      <div className="w-[50%] flex justify-start items-center px-6 text-4xl font-serif text-white">
        <Link to="/">E-school</Link>
      </div>
      <div className="w-[50%] flex items-center relative mr-5 cursor-pointer">
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn btn-secondary ml-[80%]"
        >
          User profile
        </label>
        <div className="drawer drawer-end z-10">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {roll === "Admin" ? (
                <Link to="/PersonalAdminProfile">
                  <li className="hover:bg-[#F100B7] text-xl rounded hover:text-white px-4 py-1 duration-300">
                    Admin Profile
                  </li>
                </Link>
              ) : (
                <li className="hover:bg-[#F100B7] text-xl rounded hover:text-white px-4 py-1 duration-300">
                  Admin Profile
                </li>
              )}
              <li className="hover:bg-[#F100B7] text-xl rounded hover:text-white px-4 py-1 duration-300">
                Setting
              </li>
              <li
                onClick={handleLogout}
                className="hover:bg-[#F100B7] text-xl rounded hover:text-white px-4 py-1 duration-300"
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
