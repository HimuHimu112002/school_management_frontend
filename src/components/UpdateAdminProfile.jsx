import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "../spinner/Spinner";

const UpdateAdminProfile = () => {
  let [loading, setloading] = useState(false);

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

  useEffect(() => {
    const headers = {
      user_id: "672b6e2ff27d24dd2129a50b",
      "Content-Type": "application/json",
    };
    async function singleAdminData() {
      let data = await axios.get(
        "http://localhost:4000/api/v1/getSingleAdmin",
        {
          headers,
        }
      );
      setFromData(data.data.data);
    }
    singleAdminData();
  }, []);

  let handleSuperAdminData = async () => {
    setloading(true);
    const headers = {
      user_id: "672b6e2ff27d24dd2129a50b",
      "Content-Type": "application/json",
    };
    let res = await axios.post(
      "http://localhost:4000/api/v1/update-admin",
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
    console.log(res.data)
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
  
  return (
    <div className="my-10">
    <ToastContainer position="top-right" theme="light" />
      <div className="w-24 h-24 bg-red-300 rounded-full mx-auto flex justify-center items-center">
        <img
          className="w-100 h-100 rounded-full"
          src="https://img.daisyui.com/images/profile/demo/5@94.webp"
          alt="profile"
        ></img>
      </div>
      <div className="shadow-lg rounded-md">
        <div>
          <div className="p-6 rounded-md grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <input
              type="text"
              name="AdminName"
              value={fromData.AdminName}
              onChange={handleFromdata}
              placeholder="Admin Name"
              className="input input-bordered w-full max-w-xs mb-4"
            />
            <input
              type="text"
              value={fromData.AdminNid}
              name="AdminNid"
              onChange={handleFromdata}
              placeholder="Admin N-id"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              value={fromData.AdminBio}
              name="AdminBio"
              onChange={handleFromdata}
              placeholder="Admin Bio"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              value={fromData.AdminAddress}
              name="AdminAddress"
              onChange={handleFromdata}
              placeholder="Admin Address"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              value={fromData.AdminPhone}
              name="AdminPhone"
              onChange={handleFromdata}
              placeholder="Admin Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              value={fromData.AdminEmail}
              name="AdminEmail"
              onChange={handleFromdata}
              placeholder="Admin Email"
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
      </div>
    </div>
  );
};

export default UpdateAdminProfile;
