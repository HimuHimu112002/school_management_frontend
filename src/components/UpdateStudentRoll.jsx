import Pagination from "./Pagination";
import SelectStudentClass from "./SelectStudentClass";

const UpdateStudentRoll = () => {
  return (
    <>
      <div className="overflow-x-auto px-4 shadow-md p-6 rounded-md animate-slideIn">
        <h1 className="text-center py-8 text-4xl font-serif">
          Update student roll
        </h1>
        <div className="flex gap-x-4 px-4">
          <SelectStudentClass />
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
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
                <input
                  type="text"
                  placeholder="Roll"
                  className="input input-bordered w-20 md:w-auto"
                />
              </td>
              <th>
                <button className="btn btn-sm bg-green-500 text-white">
                  Update roll
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination />
    </>
  );
};

export default UpdateStudentRoll;
