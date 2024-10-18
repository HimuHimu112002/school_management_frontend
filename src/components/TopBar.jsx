import { useState } from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  let [show, setShow] = useState(false);
  return (
    <div className="bg-green-300 w-full h-20 flex justify-between">
      <div className="px-6 flex justify-start items-center text-4xl font-serif text-white">
        <Link to="/">E-school</Link>
      </div>
      <div className="relative flex justify-center items-center mr-5 cursor-pointer">
        <div className="avatar">
          <div
            onClick={() => setShow(!show)}
            className="mask mask-squircle h-12 w-12"
          >
            <img
              src="https://img.daisyui.com/images/profile/demo/5@94.webp"
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </div>

        {show && (
          <div className="absolute bg-white w-52 py-6 top-20 right-0 shadow-md">
            <ul>
              <li className="hover:bg-[#F100B7] px-4 py-1 duration-300">
                Profile
              </li>
              <li className="hover:bg-[#F100B7] px-4 py-1 duration-300">
                Setting
              </li>
              <li className="hover:bg-[#F100B7] px-4 py-1 duration-300">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
