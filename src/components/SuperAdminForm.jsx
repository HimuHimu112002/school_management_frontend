import Pagination from "./Pagination";
const SuperAdminForm = () => {
  return (
    <div className="p-10">
      <h1 className="text-center text-3xl font-serif">Main Authority</h1>

      <div className="my-6">
        <div className="shadow-lg p-6 rounded-md grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <input
            type="text"
            placeholder="Super Admin Name"
            className="input input-bordered w-full max-w-xs mb-4"
          />
          <input
            type="text"
            placeholder="Super Admin N-id"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Super Admin Bio"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Super Admin Address"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Super Admin Phone Number"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="email"
            placeholder="Super Admin Email"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="password"
            placeholder="Super Admin Password"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />

          <button className="btn btn-secondary">Submit</button>
        </div>

        <h1 className="text-center text-3xl font-serif mt-24 mb-2">
          Add new admin
        </h1>
        <div className="shadow-lg p-6 rounded-md grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <input
            type="text"
            placeholder="Admin Name"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Admin N-id"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Admin Bio"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Admin Address"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="Admin Phone Number"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="email"
            placeholder="Admin Email"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs mr-2"
          />
          <button className="btn btn-secondary">Submit</button>
        </div>
        <h1 className="text-center text-3xl font-serif mt-24 mb-2">
          All admin
        </h1>
        <>
          <div className="overflow-x-auto shadow-lg p-6 rounded-md">
            <table className="table">
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
                    <button className="btn btn-ghost bg-green-800 text-white btn-sm">
                      Profile
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
          <Pagination />
        </>
      </div>
    </div>
  )
}

export default SuperAdminForm