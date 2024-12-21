import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateStudentInfo = () => {
  let [version, setVersion] = useState("false");
  let [admin, setAdmin] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setItemsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  const [StudentSearch, setStudentSearch] = useState("");
  const [studentSelect, setStudentSelect] = useState("");
  const [studentItem, setStudentItem] = useState("");

  const [selectedIds, setSelectedIds] = useState([]);

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
        `http://localhost:4000/api/v1/studentSearch/S-${StudentSearch}/${studentSelect}/${version}`
      );
      setStudentItem(data.data.data[0]);
    }
    searchByTeacher();
  }, [version, StudentSearch, studentSelect]);
  // student data search successfull end ----------------

  const handleCheckboxChange = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((selectedId) => selectedId !== id)
        : [...prev, id]
    );
  };
  const handleDelete = async () => {
    if (selectedIds.length === 0) {
      toast.success("No persons selected for deletion.");
      return;
    }
    const res = await axios.delete(
      "http://localhost:4000/api/v1/deleteManyStudent",
      {
        data: { ids: selectedIds },
      }
    );
    toast.success(res.data.message);
  };
  return (
    <>
      <div className="overflow-x-auto px-4 shadow-md p-6 rounded-md animate-slideIn">
        <h1 className="text-center my-3 text-4xl font-serif">
          Update student info
        </h1>
        <div className="flex gap-x-2">
          <div className="form-control w-80">
            <h3 className="text-xl font-serif">Search student id</h3>
            <input
              onChange={(e) => setStudentSearch(e.target.value)}
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
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
        <table className="table">
          <thead>
            <tr>
              <th
                className="text-red-600 cursor-pointer"
                onClick={handleDelete}
              >
                Delete
              </th>
              <th>ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Version</th>
            </tr>
          </thead>
          <tbody>
            {studentItem ? (
              <tr>
                <th>
                  <label>
                    <input
                      onChange={() => handleCheckboxChange(studentItem?._id)}
                      checked={selectedIds.includes(studentItem?._id)}
                      type="checkbox"
                      className="checkbox border border-red-500"
                    />
                  </label>
                </th>
                <th>
                  <p>{studentItem?.id}</p>
                </th>
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
                      <div className="font-bold">
                        {studentItem?.StudentName}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{studentItem?.StudentClass}</td>
                <td>{studentItem?.StudentClassVersion}</td>
              </tr>
            ) : (
              admin?.map((item, i) => (
                <tr key={i}>
                  <th>
                    <label>
                      <input
                        onChange={() => handleCheckboxChange(item?._id)}
                        checked={selectedIds.includes(item?._id)}
                        type="checkbox"
                        className="checkbox border border-red-500"
                      />
                    </label>
                  </th>
                  <th>
                    <p>{item?.id}</p>
                  </th>
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
                </tr>
              ))
            )}
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

export default UpdateStudentInfo;
