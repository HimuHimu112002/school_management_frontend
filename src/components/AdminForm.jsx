import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "../spinner/Spinner";
import axios from "axios";

const AdminForm = () => {
  let [loading, setloading] = useState(false);

  // admin data POST successfull start ----------------
  let [fromData, setFromData] = useState({
    AdminName: "",
    AdminNid: "",
    AdminBio: "",
    AdminAddress: "",
    AdminPhone: "",
    AdminEmail: "",
    AdminPassword: "",
  });
  let handleCreateAdmin = async () => {
    setloading(true);
    let res = await axios.post("http://localhost:4000/api/v1/save-admin", {
      AdminName: fromData.AdminName,
      AdminNid: fromData.AdminNid,
      AdminBio: fromData.AdminBio,
      AdminAddress: fromData.AdminAddress,
      AdminPhone: fromData.AdminPhone,
      AdminEmail: fromData.AdminEmail,
      AdminPassword: fromData.AdminPassword,
    });
    console.log(res.data);
    if (res.data["status"] === "success") {
      toast.success(res.data.message);
      setTimeout(() => {
        setloading(false);
      }, 2000);
    } else if (res.data["status"] != "success") {
      toast.success(res.data.message);
      setTimeout(() => {
        setloading(false);
      }, 2000);
    }
  };
  return (
    <div>
      <ToastContainer position="top-right" theme="light" />
      <div className="shadow-lg p-6 rounded-md grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <input
          type="text"
          onChange={(e) =>
            setFromData({ ...fromData, AdminName: e.target.value })
          }
          placeholder="Admin Name"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          onChange={(e) =>
            setFromData({ ...fromData, AdminNid: e.target.value })
          }
          placeholder="Admin N-id"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          onChange={(e) =>
            setFromData({ ...fromData, AdminBio: e.target.value })
          }
          placeholder="Admin Bio"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          onChange={(e) =>
            setFromData({ ...fromData, AdminAddress: e.target.value })
          }
          placeholder="Admin Address"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          onChange={(e) =>
            setFromData({ ...fromData, AdminPhone: e.target.value })
          }
          placeholder="Admin Phone Number"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="email"
          onChange={(e) =>
            setFromData({ ...fromData, AdminEmail: e.target.value })
          }
          placeholder="Admin Email"
          className="input input-bordered w-full max-w-xs"
        />
        {loading ? (
          <Spinner />
        ) : (
          <button
            onClick={handleCreateAdmin}
            className="btn btn-secondary w-full"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default AdminForm;
