import { useState } from "react";
import Pagination from "./Pagination";

const UpdateStudentRoll = () => {
  let [version, setVersion] = useState("false");
  return (
    <>
      <div className="overflow-x-auto px-4 shadow-md p-6 rounded-md animate-slideIn">
        <h1 className="text-center my-3 text-4xl font-serif">
          Update student roll
        </h1>
        <div className="flex gap-x-2">
          <div className="form-control w-80">
            <h3 className="text-xl font-serif">Search student id</h3>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="form-control w-80">
            <p className="text-xl font-serif">Select student Class</p>
            <select className="select select-bordered w-full max-w-xs mr-1">
              <option disabled selected>
                Select Class
              </option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
              <option>Four</option>
              <option>Five</option>
            </select>
          </div>
          <div className="flex justify-center gap-x-4 mt-9">
            <div className="flex gap-x-1">
              <p>Bangla</p>
              <input
                onClick={() => setVersion("bangla")}
                type="radio"
                name="radio-3"
                className="radio radio-secondary"
                defaultChecked
              />
            </div>
            <div className="flex gap-x-1">
              <p>English</p>
              <input
                onClick={() => setVersion("english")}
                type="radio"
                name="radio-3"
                className="radio radio-secondary"
                defaultChecked
              />
            </div>
          </div>
        </div>
        <table className="table mt-4">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Previous Roll</th>
              <th>Roll</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>120</td>
              <td>
                <input
                  type="text"
                  placeholder="Roll"
                  className="input input-bordered w-20 md:w-auto"
                />
              </td>
              <th>
                <button className="btn btn-sm bg-green-500 text-white">
                  Update roll
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination />
    </>
  );
};

export default UpdateStudentRoll;
