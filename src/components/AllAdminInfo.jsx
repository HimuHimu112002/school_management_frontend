import { useEffect, useState } from "react";
import axios from "axios";
import { IoMdEye } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { socket } from "../socket/socket";
import { Link, useNavigate } from "react-router-dom";
//import { useGetAdmindataQuery } from "../features/api/AdminSlice";

const AllAdminInfo = () => {
  let navigate = useNavigate();
  let [admin, setAdmin] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setItemsPerPage] = useState(2);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function allAdmin() {
      try {
        let data = await axios.get(
          `http://localhost:4000/api/v1/get-admin/${currentPage}/${perPage}`
        );
        setAdmin(data.data.data[0].Rows);
        setTotalPages(data.data.totalPages);
        setItemsPerPage(data.data.perPage);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    allAdmin();
  }, [currentPage, perPage]);
  // admin data get successfull end ----------------

  // admin data delete with socket start ----------------
  let handleDelete = (id, user) => {
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
    socket.on("deleteAdminUser");
  };

  // view admin profile
  let handleViewProfile = (id) => {
    navigate(`/adminProfile/${id}`);
  };

  // admin status change using socket.io
  let handleStatusChange = (id, value, item) => {
    socket.emit("adminStatus", id, value, item.user);
    socket.on("updateAdminStatus");
    socket.on("updateUserStatus");
  };

  return (
    <>
      <h1 className="text-center text-3xl font-serif mt-24 mb-2">All admin</h1>
      <div className="overflow-x-auto shadow-lg p-2 rounded-md">
        <table className="table">
          <thead>
            <tr className="text-xl font-serif">
              <th>key</th>
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
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        {item?.AdminImage ? (
                          <img
                            className="w-full h-full rounded-full"
                            src={item?.AdminImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        ) : (
                          <img
                            className="w-full h-full rounded-full"
                            src="image/test.jpg"
                            alt="Avatar Tailwind CSS Component"
                          />
                        )}
                      </div>
                    </div>
                    <div>
                      <p>Name</p>
                      <h4 className="font-bold">{item?.AdminName}</h4>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="bg-secondary text-white text-xl p-4 text-center rounded-md">
                    {item.AdminStatus}
                  </p>
                </td>
                <td>
                  <select
                    onChange={(e) =>
                      handleStatusChange(item._id, e.target.value, item)
                    }
                    className="select select-bordered w-full"
                  >
                    <option>select</option>
                    <option className="text-sm">Block</option>
                    <option className="text-sm">unBlock</option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => handleViewProfile(item._id)}
                    className="btn btn-secondary text-white text-xl my-2 w-full"
                  >
                    <IoMdEye className="text-xl" />
                  </button>
                </td>
                <td className="gap-y-2">
                  <Link to={`/updateAdminProfile/${item._id}`}>
                    <button className="btn btn-secondary text-white text-xl my-2 w-full">
                      Edit <FaEdit className="text-xl" />
                    </button>
                  </Link>
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
      <button
        className="bg-secondary p-2 rounded text-white mt-4 cursor-pointer"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <span className="mx-2 bg-secondary p-2 rounded text-white mt-4 cursor-pointer">{`Page ${currentPage} of ${totalPages}`}</span>

      <button
        className="bg-secondary p-2 rounded text-white mt-4 cursor-pointer"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </>
  );
};
export default AllAdminInfo;
