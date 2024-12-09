import axios from "axios";
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

const AllTeacherInfo = () => {
  let [admin, setAdmin] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setItemsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function allAdmin() {
      try {
        let data = await axios.get(
          `http://localhost:4000/api/v1/get-teacher/${currentPage}/${perPage}`
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
  // teacher data get successfull end ----------------
  return (
    <>
      <div className="overflow-x-auto shadow-md p-6 rounded-md animate-slideIn">

        <div className="flex gap-x-4 px-4">
          <div className="form-control w-80">
            <h3 className="mb-1 text-xl font-serif">Search teacher id</h3>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>N-id</th>
              <th>Bio</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Subject</th>
            </tr>
          </thead>
          {admin.map((item, i) => (
            <tbody key={i}>
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
                      <div className="font-bold">{item?.TeacherName}</div>
                      <div className="text-sm opacity-50">{item?.TeacherRole}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item?.TeacherEmail}
                </td>
                <td>
                  {item?.TeacherNid}
                </td>
                <td>
                  {item?.TeacherBio}
                </td>
                <td>
                  {item?.TeacherAddress}
                </td>
                <td>
                  {item?.TeacherPhone}
                </td>
                <td>
                  {item?.TeacherSubject}
                </td>
                {/* <th>
                  <button className="btn bg-green-800 text-white btn-ghost btn-sm">
                    Profile
                  </button>
                </th> */}
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default AllTeacherInfo;
