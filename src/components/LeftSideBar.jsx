import { FaChartLine, FaUserLock } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { GrUpdate } from "react-icons/gr";
import { IoMdLogOut } from "react-icons/io";
import { MdAppRegistration } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { clearToken, GetUserRoll } from "../utility/storageUtility";
import { toast } from "react-toastify";
const LeftSideBar = () => {
  let navigate = useNavigate();

  let handleSuper = () => {
    let roll = GetUserRoll();
    if (roll === "Super-Admin") {
      navigate(`/super-xyz`);
    } else {
      toast.success("Access only for super-admin");
      navigate(`/`);
    }
  };

  let handleLogout = () => {
    clearToken();
    navigate("/sign-in");
  };

  return (
    <div className="flex gap-x-4">
      <div className="w-1/4 shadow-lg border">
        <ul>
          <Link to="/S-signUp">
            <li className="flex font-serif font-medium text-xl px-2 py-3 cursor-pointer hover:transform hover:translate-x-1 duration-200 hover:bg-[#F100B7] hover:text-white mb-5">
              <MdAppRegistration className="mt-1" /> <p>Student Registration</p>
            </li>
          </Link>

          <Link to="/T-signUp">
            <li className="flex font-serif font-medium text-xl px-2 py-3 cursor-pointer hover:transform hover:translate-x-1 duration-200 hover:bg-[#F100B7] hover:text-white mb-5">
              <MdAppRegistration className="mt-1" />
              <p>Teacher Registration</p>
            </li>
          </Link>

          <Link to="/all-student">
            <li className="flex font-serif font-medium text-xl px-2 py-3 cursor-pointer hover:transform hover:translate-x-1 duration-200 hover:bg-[#F100B7] hover:text-white mb-5">
              <FcBusinessman className="mt-1 mr-4" />
              All Student
            </li>
          </Link>

          <Link to="/all-teacher">
            <li className="flex font-serif font-medium text-xl px-2 py-3 cursor-pointer hover:transform hover:translate-x-1 duration-200 hover:bg-[#F100B7] hover:text-white mb-5">
              <FcBusinessman className="mt-1 mr-4" />
              All Teacher
            </li>
          </Link>

          <Link to="/class">
            <li className="flex font-serif font-medium text-xl px-2 py-3 cursor-pointer hover:transform hover:translate-x-1 duration-200 hover:bg-[#F100B7] hover:text-white mb-5">
              <SiGoogleclassroom className="mt-1 mr-4" />
              Class Room
            </li>
          </Link>

          <Link to="/notice">
            <li className="flex font-serif font-medium text-xl px-2 py-3 cursor-pointer hover:transform hover:translate-x-1 duration-200 hover:bg-[#F100B7] hover:text-white mb-5">
              <MdAppRegistration className="mt-1 mr-4" /> Notice Board
            </li>
          </Link>

          <Link to="/update-roll">
            <li className="flex font-serif font-medium text-xl px-2 py-3 cursor-pointer hover:transform hover:translate-x-1 duration-200 hover:bg-[#F100B7] hover:text-white mb-5">
              <GrUpdate className="mt-1 mr-4" />
              Update Student Roll
            </li>
          </Link>

          <Link to="/update-teacher">
            <li className="flex font-serif font-medium text-xl px-2 py-3 cursor-pointer hover:transform hover:translate-x-1 duration-200 hover:bg-[#F100B7] hover:text-white mb-5">
              <GrUpdate className="mt-1 mr-4" />
              Update Teacher Info
            </li>
          </Link>

          <Link to="/update-student">
            <li className="flex font-serif font-medium text-xl px-2 py-3 cursor-pointer hover:transform hover:translate-x-1 duration-200 hover:bg-[#F100B7] hover:text-white mb-5">
              <GrUpdate className="mt-1 mr-4" />
              Update Student Info
            </li>
          </Link>

          <Link to="/exam-room">
            <li className="flex font-serif font-medium text-xl px-2 py-3 cursor-pointer hover:transform hover:translate-x-1 duration-200 hover:bg-[#F100B7] hover:text-white mb-5">
              <SiGoogleclassroom className="mt-1 mr-4" />
              Exam Room
            </li>
          </Link>

          <li className="flex font-serif font-medium text-xl px-2 py-3 cursor-pointer hover:transform hover:translate-x-1 duration-200 hover:bg-[#F100B7] hover:text-white mb-5">
            <FaChartLine className="mt-1 mr-4" />
            Success Chart
          </li>
          <li
            onClick={handleSuper}
            className="flex font-serif font-medium text-xl px-2 py-3 cursor-pointer hover:transform hover:translate-x-1 duration-200 hover:bg-[#F100B7] hover:text-white mb-5"
          >
            <FaUserLock className="mt-1 mr-4" />
            Super Admin
          </li>
        </ul>
        <h1
          onClick={handleLogout}
          className="flex font-serif font-medium text-xl px-2 py-3 cursor-pointer hover:transform hover:translate-x-1 duration-200 hover:bg-[#F100B7] hover:text-white mb-5"
        >
          <IoMdLogOut className="mt-1 mr-4" />
          LoOut
        </h1>
      </div>
      <div className="w-3/4 shadow-lg border">
        <Outlet />
      </div>
    </div>
  );
};

export default LeftSideBar;
