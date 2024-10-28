import Pagination from "./Pagination";
import SelectStudentClass from "./SelectStudentClass";

const AllStudentInfo = () => {
  return (
    <>
      <div className="overflow-x-auto shadow-md p-6 rounded-md">
        <h1 className="text-center py-8 text-4xl font-serif">All Student</h1>
        <div className="flex gap-x-4 px-4">
          <div className="w-full form-control">
            <h3 className="mb-4 text-3xl font-serif">Search student id</h3>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <SelectStudentClass />
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>mark</th>
              <th>Name</th>
              <th>Job</th>
              <th>Profile</th>
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
                <button className="btn btn-ghost bg-green-800 text-white btn-sm">Profile</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination />
    </>
  );
};

export default AllStudentInfo;