import { useState } from "react";
import { toast } from "react-toastify";
import { useCreateAdminMutation } from "../features/api/AdminSlice";
import Spinner from "../spinner/Spinner";

const AdminForm = () => {
  const [createAdminData] = useCreateAdminMutation();
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
    try {
      const res = await createAdminData({
        AdminName: fromData.AdminName,
        AdminNid: fromData.AdminNid,
        AdminBio: fromData.AdminBio,
        AdminAddress: fromData.AdminAddress,
        AdminPhone: fromData.AdminPhone,
        AdminEmail: fromData.AdminEmail,
        AdminPassword: fromData.AdminPassword,
      }).unwrap();
      if (res["status"] === "success") {
        toast.success(res.message);
        setTimeout(() => {
          setloading(false);
        }, 2000);
      } else if (res["status"] != "success") {
        toast.success(res.message);
        setTimeout(() => {
          setloading(false);
        }, 2000);
      }
    } catch (error) {
      toast.success(error);
    }
  };
  return (
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
        onChange={(e) => setFromData({ ...fromData, AdminNid: e.target.value })}
        placeholder="Admin N-id"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        onChange={(e) => setFromData({ ...fromData, AdminBio: e.target.value })}
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
      <input
        type="password"
        onChange={(e) =>
          setFromData({ ...fromData, AdminPassword: e.target.value })
        }
        placeholder="Admin Password"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        type="file"
        className="file-input file-input-bordered w-full max-w-xs mr-2"
      />
      {loading ? (
        <Spinner />
      ) : (
        <button
          onClick={handleCreateAdmin}
          className="btn btn-secondary w-full my-2"
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default AdminForm;
