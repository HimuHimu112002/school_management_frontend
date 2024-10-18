const TeacherSignUp = () => {
  return (
    <div className="p-10">
      <div className="my-6 shadow-md p-6 rounded-md">
        <h1 className="text-center text-3xl font-serif mb-4">
          Have a nice journey with us
        </h1>
        <div>
          <input
            type="text"
            placeholder="Teacher Name"
            className="input input-bordered w-full max-w-xs mb-6 mr-1"
          />
          <input
            type="text"
            placeholder="Student N-id"
            className="input input-bordered w-full max-w-xs mb-6 mr-1"
          />
          <input
            type="text"
            placeholder="Teacher Address"
            className="input input-bordered w-full max-w-xs mr-1 mb-6"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full max-w-xs mb-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs ml-2"
          />
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs ml-2 mb-2"
          />
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Select Subject
            </option>
            <option>Bangla</option>
            <option>English</option>
            <option>Math</option>
            <option>Ict</option>
            <option>Arabic</option>
          </select>
        </div>
        <button className="btn btn-secondary mt-6 ">Submit</button>
      </div>
    </div>
  );
};

export default TeacherSignUp;
