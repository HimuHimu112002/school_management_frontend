import Pagination from "./Pagination";

const UpdateTeacherInfo = () => {
  return (
    <>
      <div className="overflow-x-auto px-4 shadow-md p-6 rounded-md animate-slideIn">
        <h1 className="text-center py-8 text-4xl font-serif">Update teachers info</h1>
        <div className="flex gap-x-4 px-4">
          <div className="form-control w-80">
            <h3 className="mb-4 text-3xl font-serif">Search teacher's id</h3>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Select</th>
              <th>Name</th>
              <th>Job</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
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
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <th>
                <button className="btn btn-sm bg-green-500 text-white">Edit</button>
              </th>
              <th>
                <button className="btn btn-sm bg-red-500 text-white">Delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination/>
    </>
  );
};

export default UpdateTeacherInfo;
