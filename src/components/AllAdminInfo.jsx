import { useEffect, useState } from "react";
//import { useGetAdmindataQuery } from "../features/api/AdminSlice";
import Pagination from "./Pagination";
import axios from "axios";
const AllAdminInfo = () => {
  // RTK query fetch data get successfull start ----------------
  // const {
  //   data: item,
  //   error: adminError,
  //   isLoading: adminIsLoading,
  // } = useGetAdmindataQuery();
  // console.log(item)
  // if (adminIsLoading)
  //   return (
  //     <div className="h-screen flex justify-center items-center">
  //       Loading...
  //     </div>
  //   );
  // if (adminError)
  //   return (
  //     <div className="h-screen flex justify-center items-center">
  //       Loading...
  //     </div>
  //   );
  let [admin, setAdmin] = useState([]);

  useEffect(() => {
    async function allAdmin() {
      let data = await axios.get("http://localhost:4000/api/v1/get-admin");
      setAdmin(data.data.data);
    }
    allAdmin();
  }, []);
  // super admin data get successfull end ----------------
  return (
    <>
      <h1 className="text-center text-3xl font-serif mt-24 mb-2">All admin</h1>
      <div className="overflow-x-auto shadow-lg p-2 rounded-md">
        <table className="table border border-red-200">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
              <th>Role</th>
              <th>Profile</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {admin.map((item, i) => (
              <tr className=" divide-x-2 divide-y-4" key={i}>
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
                      <p>Name</p>
                      <h4 className="font-bold">{item?.AdminName}</h4>
                    </div>
                  </div>
                </td>
                <td>
                  <p>{item?.AdminEmail}</p>
                </td>
                <td>
                  <p>{item?.AdminStatus}</p>
                </td>
                <td>
                  <select className="select select-bordered">
                    <option>Block</option>
                    <option>un-block</option>
                  </select>
                </td>
                <td>
                  <p>{item?.AdminRole}</p>
                </td>
                <td>
                  <button className="btn btn-success text-white my-2 w-full">
                    Profile
                  </button>
                </td>
                <td className="justify-between items-center gap-y-2">
                  <button className="btn btn-success text-white my-2 w-full">
                    Edit
                  </button>
                  <button className="btn btn-error text-white w-full">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </>
  );
};

export default AllAdminInfo;
