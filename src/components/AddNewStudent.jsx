import { useState } from "react";

const AddNewStudent = () => {
  let [version, setVersion] = useState("false");
  console.log(version);
  return (
    <>
      <div className="shadow-lg p-6 rounded-md animate-slideIn">
        <div className="flex justify-center gap-x-4">
          <div className="flex gap-x-1">
            <p>Bangla version</p>
            <input
              onClick={() => setVersion("bangla")}
              type="radio"
              name="radio-3"
              className="radio radio-secondary"
              defaultChecked
            />
          </div>
          <div className="flex gap-x-1">
            <p>English version</p>
            <input
              onClick={() => setVersion("english")}
              type="radio"
              name="radio-3"
              className="radio radio-secondary"
              defaultChecked
            />
          </div>
        </div>
        <>
          <h1 className="text-center text-3xl font-serif mt-2">
            Admission For New Student
          </h1>
          <p className="text-center mb-4 text-green-800 font-serif">
            {version === "bangla" ? "Bangla version" : "English version"}
          </p>
          <div className="grid gap-x-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <input
              type="text"
              placeholder="Student Name"
              className="input input-bordered w-full max-w-xs mb-6"
            />
            <input
              type="text"
              placeholder="Student Father's Name"
              className="input input-bordered w-full max-w-xs mb-6"
            />
            <input
              type="text"
              placeholder="Student Mother's Name"
              className="input input-bordered w-full max-w-xs mb-6"
            />
            <input
              type="text"
              placeholder="Student Address"
              className="input input-bordered w-full max-w-xs mb-6"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <select className="select select-bordered w-full max-w-xs mr-1">
              <option disabled selected>
                Select Class
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            {version === "bangla" ? (
              <select className="select select-bordered w-full max-w-xs mr-1">
                <option disabled selected>
                  Admission fee of bangla version
                </option>
                <option>Bv-Class-one-100tk</option>
                <option>Bv-Class-two-200tk</option>
                <option>Bv-Class-three-300tk</option>
                <option>Bv-Class-four-400tk</option>
                <option>Bv-Class-five-500tk</option>
              </select>
            ) : (
              <select className="select select-bordered w-full max-w-xs mr-1">
                <option disabled selected>
                  Admission fee of ebglish version
                </option>
                <option>Ev-Class-one-300tk</option>
                <option>Ev-Class-two-400tk</option>
                <option>Ev-Class-three-500tk</option>
                <option>Ev-Class-four-600tk</option>
                <option>Ev-Class-five-700tk</option>
              </select>
            )}
            <button className="btn btn-secondary">Confirme admission</button>
          </div>
        </>
      </div>
    </>
  );
};

export default AddNewStudent;
