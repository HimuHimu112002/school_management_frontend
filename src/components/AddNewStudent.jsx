import { useState } from "react";
import Spinner from "../spinner/Spinner";
import handleResponse from "../Response/handleResponse";
import { useCreateStudentMutation } from "../features/api/SuperAdminapiSlice";

const AddNewStudent = () => {
  let [version, setVersion] = useState("false");
  let [loading, setloading] = useState(false);
  const [fromData, setFromData] = useState({
    StudentName: "",
    StudentFatherName: "",
    StudentMotherName: "",
    StudentAddress: "",
    StudentPhone: "",
    StudentClass: "",
    StudentAdmissionFee: "",
  });
  let handleFromdata = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };
  const [createStudent, { isError }] = useCreateStudentMutation();
  if (isError)
    return (
      <div className="h-screen flex justify-center items-center">
        Data loading failed !
      </div>
    );
  let handleNewStudent = async () => {
    const res = await createStudent({
      StudentName: fromData.StudentName,
      StudentFatherName: fromData.StudentFatherName,
      StudentMotherName: fromData.StudentMotherName,
      StudentAddress: fromData.StudentAddress,
      StudentPhone: fromData.StudentPhone,
      StudentClassVersion: version,
      StudentClass: fromData.StudentClass,
      StudentAdmissionFee: fromData.StudentAdmissionFee,
    }).unwrap();
    handleResponse(res, setloading);
  };
  // student data create successfull end ----------------
  return (
    <>
      <div className="shadow-lg p-6 rounded-md animate-slideIn">
        <div className="flex justify-center gap-x-4">
          <div className="flex gap-x-1">
            <p>Bangla version</p>
            <input
              onClick={() => setVersion("Bangla")}
              type="radio"
              name="radio-3"
              className="radio radio-secondary"
            />
          </div>
          <div className="flex gap-x-1">
            <p>English version</p>
            <input
              onClick={() => setVersion("English")}
              type="radio"
              name="radio-3"
              className="radio radio-secondary"
            />
          </div>
        </div>
        <>
          <h1 className="text-center text-3xl font-serif mt-2">
            Admission For New Student
          </h1>
          <p className="text-center mb-4 text-green-800 font-serif">
            {version === "Bangla" ? "Bangla version" : "English version"}
          </p>
          <div className="grid gap-x-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <input
              type="text"
              name="StudentName"
              onChange={handleFromdata}
              placeholder="Student Name"
              className="input input-bordered w-full max-w-xs mb-6"
            />
            <input
              type="text"
              name="StudentFatherName"
              onChange={handleFromdata}
              placeholder="Student Father's Name"
              className="input input-bordered w-full max-w-xs mb-6"
            />
            <input
              type="text"
              name="StudentMotherName"
              onChange={handleFromdata}
              placeholder="Student Mother's Name"
              className="input input-bordered w-full max-w-xs mb-6"
            />
            <input
              type="text"
              name="StudentAddress"
              onChange={handleFromdata}
              placeholder="Student Address"
              className="input input-bordered w-full max-w-xs mb-6"
            />
            <input
              type="text"
              name="StudentPhone"
              onChange={handleFromdata}
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="StudentClass"
              onChange={handleFromdata}
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

            {version === "Bangla" ? (
              <select
                name="StudentAdmissionFee"
                onChange={handleFromdata}
                className="select select-bordered w-full max-w-xs mr-1"
              >
                <option disabled selected>
                  Admission fee of bangla version
                </option>
                <option>Bv-one-100tk</option>
                <option>Bv-two-200tk</option>
                <option>Bv-three-300tk</option>
                <option>Bv-four-400tk</option>
                <option>Bv-five-500tk</option>
              </select>
            ) : (
              <select
                name="StudentAdmissionFee"
                onChange={handleFromdata}
                className="select select-bordered w-full max-w-xs mr-1"
              >
                <option disabled selected>
                  Admission fee of english version
                </option>
                <option>Ev-one-300tk</option>
                <option>Ev-two-400tk</option>
                <option>Ev-three-500tk</option>
                <option>Ev-four-600tk</option>
                <option>Ev-five-700tk</option>
              </select>
            )}
            {loading ? (
              <Spinner />
            ) : (
              <button onClick={handleNewStudent} className="btn btn-secondary">
                Pay fee Confirme admission
              </button>
            )}
          </div>
        </>
      </div>
    </>
  );
};

export default AddNewStudent;
