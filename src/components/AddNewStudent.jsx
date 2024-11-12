const AddNewStudent = () => {
  return (
    <>
      <div className="my-6 shadow-lg p-6 rounded-md animate-slideIn">
        <h1 className="text-center text-3xl font-serif mb-4">New Student</h1>
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
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
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
