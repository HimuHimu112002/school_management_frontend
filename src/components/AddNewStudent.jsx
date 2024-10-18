const AddNewStudent = () => {
  return (
    <>
      <div className="my-6 shadow-md p-6 rounded-md">
        <h1 className="text-center text-3xl font-serif mb-4">New Student</h1>
        <div>
          <input
            type="text"
            placeholder="Student Name"
            className="input input-bordered w-full max-w-xs mb-6 mr-1"
          />
          <input
            type="text"
            placeholder="Student Father's Name"
            className="input input-bordered w-full max-w-xs mb-6 mr-1"
          />
          <input
            type="text"
            placeholder="Student Mother's Name"
            className="input input-bordered w-full max-w-xs mb-6"
          />
          <input
            type="text"
            placeholder="Student Address"
            className="input input-bordered w-full max-w-xs mr-1 mb-6"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full max-w-xs mr-1"
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs mr-1"
          />
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs mr-1"
          />
          <select className="select select-bordered w-full max-w-xs mr-1">
            <option disabled selected>
              Select Class
            </option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
            <option>Four</option>
            <option>Five</option>
          </select>
          <input
            type="text"
            placeholder="Admission fee"
            className="input input-bordered w-full max-w-xs mr-1 mb-6"
          />
        </div>
        <button className="btn btn-secondary mt-6 ">Submit</button>
      </div>
    </>
  );
};

export default AddNewStudent;
