import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useGetSuperAdminQuery } from "../features/api/SuperAdminapiSlice";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Spinner from "../spinner/Spinner";
import ProfileSkeleton from "../skeleton/ProfileSkeleton";

const SuperAdminForm = () => {
  let [loading, setloading] = useState(false);
  // super admin data get successfull start ----------------
  const [fromData, setFromData] = useState({
    AdminName: "",
    AdminNid: "",
    AdminBio: "",
    AdminAddress: "",
    AdminPhone: "",
    AdminEmail: "",
    AdminPassword: "",
  });
  let handleFromdata = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  const {
    data: adminData,
    error: adminError,
    isLoading: adminIsLoading,
  } = useGetSuperAdminQuery();
  useEffect(() => {
    if (adminData?.data[0]) {
      setFromData({
        AdminName: adminData.data[0].AdminName || "",
        AdminNid: adminData.data[0].AdminNid || "",
        AdminBio: adminData.data[0].AdminBio || "",
        AdminAddress: adminData.data[0].AdminAddress || "",
        AdminPhone: adminData.data[0].AdminPhone || "",
        AdminEmail: adminData.data[0].AdminEmail || "",
        AdminPassword: adminData.data[0].AdminPassword || "",
      });
    }
  }, [adminData]);
  if (adminIsLoading)
    return (
      <div className="h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  // super admin data get successfull end ----------------

  // super admin data update successfull start ----------------

  let handleSuperAdminData = async () => {
    setloading(true);
    const headers = {
      user_id: "670aa0692dbab18cccf27b82",
      "Content-Type": "application/json",
    };
    let res = await axios.post(
      "http://localhost:4000/api/v1/update-super-admin",
      {
        AdminName: fromData.AdminName,
        AdminNid: fromData.AdminNid,
        AdminBio: fromData.AdminBio,
        AdminAddress: fromData.AdminAddress,
        AdminPhone: fromData.AdminPhone,
        AdminEmail: fromData.AdminEmail,
        AdminPassword: fromData.AdminPassword,
      },
      { headers }
    );
    if (res.data["status"] != "success") {
      toast.success(res.data.message);
      setTimeout(() => {
        setloading(false);
      }, 2000);
    } else if (res.data["status"] === "success") {
      toast.success(res.data.message);
      setTimeout(() => {
        setloading(false);
      }, 2000);
    }
  };
  // super admin data update successfull end ----------------
  return (
    <div className="p-10">
      <ToastContainer position="top-right" theme="light" />
      <h1 className="text-center text-3xl font-serif">Main Authority</h1>
      <div className="my-6">
        {adminError ? (
          <ProfileSkeleton />
        ) : (
          <div>
            <div className="shadow-lg p-6 rounded-md grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <input
                type="text"
                value={fromData.AdminName}
                name="AdminName"
                onChange={handleFromdata}
                placeholder="Super Admin Name"
                className="input input-bordered w-full max-w-xs mb-4"
              />
              <input
                type="text"
                value={fromData.AdminNid}
                name="AdminNid"
                onChange={handleFromdata}
                placeholder="Super Admin N-id"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                value={fromData.AdminBio}
                name="AdminBio"
                onChange={handleFromdata}
                placeholder="Super Admin Bio"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                value={fromData.AdminAddress}
                name="AdminAddress"
                onChange={handleFromdata}
                placeholder="Super Admin Address"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                value={fromData.AdminPhone}
                name="AdminPhone"
                onChange={handleFromdata}
                placeholder="Super Admin Phone Number"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="email"
                value={fromData.AdminEmail}
                name="AdminEmail"
                onChange={handleFromdata}
                placeholder="Super Admin Email"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="password"
                value={fromData.AdminPassword}
                name="AdminPassword"
                onChange={handleFromdata}
                placeholder="Super Admin Password"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
              {loading ? (
                <Spinner />
              ) : (
                <button
                  onClick={handleSuperAdminData}
                  className="btn btn-secondary"
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        )}

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
  );
};

export default SuperAdminForm;
