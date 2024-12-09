import { useState } from "react";
import handleResponse from "../Response/handleResponse";
import Spinner from "../spinner/Spinner";
import { useCreateTeacherMutation } from "../features/api/SuperAdminapiSlice";

const AddNewTeacher = () => {
  let [loading, setloading] = useState(false);
  const [postData] = useCreateTeacherMutation();
  const [fromData, setFromData] = useState({
    TeacherName: "",
    TeacherNid: "",
    TeacherBio: "",
    TeacherAddress: "",
    TeacherPhone: "",
    TeacherEmail: "",
    TeacherSubject: "",
  });
  let handleFromdata = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };
  let handleSuperAdminData = async () => {
    const Data = {
      TeacherName: fromData.TeacherName,
      TeacherNid: fromData.TeacherNid,
      TeacherBio: fromData.TeacherBio,
      TeacherAddress: fromData.TeacherAddress,
      TeacherPhone: fromData.TeacherPhone,
      TeacherEmail: fromData.TeacherEmail,
      TeacherSubject: fromData.TeacherSubject,
    };
    let res = await postData({data:Data}).unwrap();
    handleResponse(res, setloading);
  };
  // teacher data update successfull end ----------------
  return (
    <div>
      <div className="my-6 shadow-md p-6 rounded-md animate-slideIn">
        <h1 className="text-center text-3xl font-serif mb-4">
          Have a nice journey with us
        </h1>
        <div className="grid gap-x-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <input
            type="text"
            placeholder="Teacher Name"
            name="TeacherName"
            onChange={handleFromdata}
            className="focus:outline-none focus:border-secondary input input-bordered w-full mb-5"
          />
          <input
            type="text"
            placeholder="Student N-id"
            name="TeacherNid"
            onChange={handleFromdata}
            className="focus:outline-none focus:border-secondary input input-bordered w-full mb-5"
          />
          <input
            type="text"
            placeholder="Teacher Address"
            name="TeacherAddress"
            onChange={handleFromdata}
            className="focus:outline-none focus:border-secondary input input-bordered w-full mb-5"
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="TeacherPhone"
            onChange={handleFromdata}
            className="focus:outline-none focus:border-secondary input input-bordered w-full mb-5"
          />
          <input
            type="email"
            placeholder="Email"
            name="TeacherEmail"
            onChange={handleFromdata}
            className="focus:outline-none focus:border-secondary input input-bordered w-full mb-5"
          />
          <input
            type="text"
            placeholder="Bio"
            name="TeacherBio"
            onChange={handleFromdata}
            className="focus:outline-none focus:border-secondary input input-bordered w-full mb-5"
          />
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs mb-2"
          />
          <select
            name="TeacherSubject"
            onChange={handleFromdata}
            className="focus:outline-none focus:border-secondary select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Select Subject
            </option>
            <option>Bangla</option>
            <option>English</option>
            <option>Math</option>
            <option>Ict</option>
            <option>Arabic</option>
          </select>

          {loading ? (
            <Spinner />
          ) : (
            <button
              onClick={handleSuperAdminData}
              className="btn btn-secondary"
            >
              Submit new teacher data
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddNewTeacher;
