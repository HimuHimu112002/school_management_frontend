import { useEffect, useState } from "react";
import { useGetSuperAdminQuery } from "../features/api/SuperAdminapiSlice";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Spinner from "../spinner/Spinner";
import ProfileSkeleton from "../skeleton/ProfileSkeleton";
import AdminForm from "./AdminForm";
import AllAdminInfo from "./AllAdminInfo";

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
  });
  let handleFromdata = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  // RTK query fetch data get successfull start ----------------
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
      user_id: "67264cb55bbc3c2fde8564ae",
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
    <div className="mt-5 animate-slideIn">
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
                name="AdminName"
                value={fromData.AdminName}
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
        <AdminForm/>
        <AllAdminInfo/>
      </div>
    </div>
  );
};

export default SuperAdminForm;
