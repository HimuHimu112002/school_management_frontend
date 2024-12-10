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
        <table className="table w-[1100px]">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Subject</th>
              <th>N-id</th>
              <th>Bio</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          {admin.map((item, i) => (
            <tbody key={i}>
              <tr>
                <td className="font-serif">{item?.id}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-auto">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div className="text-sm opacity-70">
                      <span className="font-bold">Name: {item?.TeacherName}</span>
                      <br />
                      <span className="text-secondary font-serif font-bold">
                        Role: {item?.TeacherRole}
                      </span>
                      <br />
                      <span className="text-secondary font-serif font-bold">
                        Email: {item?.TeacherEmail}{" "}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="font-serif font-semibold">{item?.TeacherSubject}</td>
                <td className="font-serif">{item?.TeacherNid}</td>
                <td className="font-serif">{item?.TeacherBio}</td>
                <td className="font-serif">{item?.TeacherAddress}</td>
                <td className="font-serif">{item?.TeacherPhone}</td>
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
