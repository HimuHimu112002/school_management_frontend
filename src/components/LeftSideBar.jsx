import { FaChartLine, FaUserLock } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { GrUpdate } from "react-icons/gr";
import { IoMdLogOut } from "react-icons/io";
import { MdAppRegistration } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { Link, Outlet } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <div className="flex gap-x-4">
      <div className="w-1/6 shadow-lg">
        <ul>
          <Link to="/S-signUp">
            <li className="flex justify-around font-serif font-medium text-xl px-2 py-3 cursor-pointer hover:transform hover:translate-x-1 duration-200 hover:bg-[#F100B7] hover:text-white mb-5">
              <MdAppRegistration className="mt-1" /> <p>Student Registration</p>
            </li>
          </Link>

          <Link to="/T-signUp">
            <li className="flex justify-around font-serif font-medium text-xl px-2 py-3 cursor-pointer hover:transform hover:translate-x-1 duration-200 hover:bg-[#F100B7] hover:text-white mb-5">
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

          <Link to="/super-xyz">
            <li className="flex font-serif font-medium text-xl px-2 py-3 cursor-pointer hover:transform hover:translate-x-1 duration-200 hover:bg-[#F100B7] hover:text-white mb-5">
              <FaUserLock className="mt-1 mr-4" />
              Super Admin
            </li>
          </Link>
        </ul>

        <Link to="/sign-in">
          <h1 className="flex font-serif font-medium text-xl px-2 py-3 cursor-pointer hover:transform hover:translate-x-1 duration-200 hover:bg-[#F100B7] hover:text-white mb-5">
            <IoMdLogOut className="mt-1 mr-4" />
            LoOut
          </h1>
        </Link>
      </div>
      <div className="w-5/6 shadow-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default LeftSideBar;
