import { useEffect, useState } from "react";
//import { useGetAdmindataQuery } from "../features/api/AdminSlice";
import Pagination from "./Pagination";
import axios from "axios";
import { IoMdEye } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { socket } from "../socket/socket";
import { useNavigate } from "react-router-dom";
const AllAdminInfo = () => {
  let navigate = useNavigate()
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

  // admin data delete with socket start ----------------
  let handleDelete = (id,user) => {
    socket.emit("adminDelete", id, user);
    socket.on("deleteAdmin", (adminData) => {
      if (adminData._id) {
        setAdmin((allData) => {
          let arr = [...allData];
          let updateData = arr.filter((el) => el._id != adminData._id);
          return updateData;
        });
      }
    });
    socket.on("deleteAdminUser")
  };
  // admin data delete with socket end ----------------

  let handleViewProfile = (id)=>{
    navigate(`/adminProfile/${id}`)
  }
  return (
    <>
      <h1 className="text-center text-3xl font-serif mt-24 mb-2">All admin</h1>
      <div className="overflow-x-auto shadow-lg p-2 rounded-md">
        <table className="table">
          <thead>
            <tr className="text-xl font-serif">
              <th>Serial</th>
              <th>Name</th>
              <th>Status</th>
              <th>Action</th>
              <th>Profile</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="font-serif">
            {admin.map((item, i) => (
              <tr className="divide-x-2" key={i}>
                <td>{i+1}</td>
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
                  <p className="bg-green-600 text-white text-xl p-4 text-center rounded-md">
                    {item?.AdminStatus}
                  </p>
                </td>
                <td>
                  <select className="select select-bordered w-full">
                    <option className="text-xl">Block</option>
                    <option className="text-xl">unBlock</option>
                  </select>
                </td>
                <td>
                  <button onClick={()=> handleViewProfile(item._id)} className="btn btn-success text-white text-xl my-2 w-full">
                    <IoMdEye className="text-xl" />
                  </button>
                </td>
                <td className="gap-y-2">
                  <button className="btn btn-success text-white text-xl my-2 w-full">
                    Edit <FaEdit className="text-xl" />
                  </button>
                  <button
                    onClick={() => handleDelete(item._id, item.user)}
                    className="btn btn-error text-white text-xl w-full"
                  >
                    Delete <MdDelete className="text-xl" />
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
