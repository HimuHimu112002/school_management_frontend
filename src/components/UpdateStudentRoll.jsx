import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateStudentRoll = () => {
  let [version, setVersion] = useState("false");
  let [admin, setAdmin] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setItemsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  const [studentSelect, setStudentSelect] = useState("");
  const [studentItem, setStudentItem] = useState([]);
  const [StudentRollUpdate, setStudentRollUpdate] = useState([]);

  useEffect(() => {
    async function allAdmin() {
      try {
        let data = await axios.get(
          `http://localhost:4000/api/v1/get-student/${currentPage}/${perPage}`
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
  // student data get successfull end ----------------

  useEffect(() => {
    async function searchByTeacher() {
      let data = await axios.get(
        `http://localhost:4000/api/v1/studentClassVersionSearch/${studentSelect}/${version}`
      );
      setStudentItem(data.data.data);
    }
    searchByTeacher();
  }, [version, studentSelect]);

  const handleInputChange = (id, value) => {
    setStudentRollUpdate((prevRoles) => {
      const existingUser = prevRoles.find((user) => user.id === id);
      if (existingUser) {
        return prevRoles.map((user) =>
          user.id === id ? { ...user, data: value } : user
        );
      } else {
        return [...prevRoles, { id, data: value }];
      }
    });
  };
  let handleUpdateRoll = async () => {
    if (StudentRollUpdate.length === 0) {
      toast.success("Input empty value for update.");
      return;
    }
    const res = await axios.post(
      "http://localhost:4000/api/v1/updateManyStudent",
      {
        data: StudentRollUpdate,
      }
    );
    toast.success(res.data.message);
  };
  return (
    <>
      <div className="overflow-x-auto px-4 shadow-md p-6 rounded-md animate-slideIn">
        <h1 className="text-center my-3 text-4xl font-serif">
          Update student roll
        </h1>
        <div className="flex gap-x-2">
          <div className="form-control w-80">
            <p className="text-xl font-serif">Select student Class</p>
            <select
              onChange={(e) => setStudentSelect(e.target.value)}
              className="select select-bordered w-full max-w-xs mr-1"
            >
              <option disabled selected>
                Select Class
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="flex justify-center gap-x-4 mt-9">
            <div className="flex gap-x-1">
              <p>Bangla</p>
              <input
                onClick={() => setVersion("Bangla")}
                type="radio"
                name="radio-3"
                className="radio radio-secondary"
              />
            </div>
            <div className="flex gap-x-1">
              <p>English</p>
              <input
                onClick={() => setVersion("English")}
                type="radio"
                name="radio-3"
                className="radio radio-secondary"
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleUpdateRoll}
          className="mt-3 btn btn-sm bg-green-500 text-white"
        >
          Multiple Update
        </button>
        <table className="table mt-4">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Version</th>
              <th>Previous Roll</th>
              <th>Roll</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {studentItem?.length > 0
              ? studentItem.map((item, i) => (
                  <tr key={i}>
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
                          <div className="font-bold">{item?.StudentName}</div>
                        </div>
                      </div>
                    </td>
                    <td>{item?.StudentClass}</td>
                    <td>{item?.StudentClassVersion}</td>
                    <td>{item?.id}</td>
                    <td>
                      <input
                        onChange={(e) =>
                          handleInputChange(item._id, e.target.value)
                        }
                        type="text"
                        placeholder="Roll"
                        className="input input-bordered w-20 md:w-auto"
                      />
                    </td>
                    <th>
                      <button className="btn btn-sm bg-green-500 text-white">
                        Single update
                      </button>
                    </th>
                  </tr>
                ))
              : admin?.map((item, i) => (
                  <tr key={i}>
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
                          <div className="font-bold">{item?.StudentName}</div>
                        </div>
                      </div>
                    </td>
                    <td>{item?.StudentClass}</td>
                    <td>{item?.StudentClassVersion}</td>
                    <td>{item?.id}</td>
                    <td>
                      <input
                        onChange={(e) =>
                          handleInputChange(item._id, e.target.value)
                        }
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
                ))}
          </tbody>
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

export default UpdateStudentRoll;
