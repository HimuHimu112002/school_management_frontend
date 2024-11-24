import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Spinner from "../spinner/Spinner";
import handleResponse from "../Response/handleResponse";
import { useCreateAdminMutation } from "../features/api/SuperAdminapiSlice";

const AdminForm = () => {
  let navigate = null
  let [loading, setloading] = useState(false);
  const [createAdmin, { isLoading, isError }] = useCreateAdminMutation();
  
  // admin data POST successfull start ----------------
  let [fromData, setFromData] = useState({
    AdminName: "",
    AdminNid: "",
    AdminBio: "",
    AdminAddress: "",
    AdminPhone: "",
    AdminEmail: "",
  });
  if (isError)
    return (
      <div className="h-screen flex justify-center items-center">
        Data loading failed try agai.
      </div>
    );
  if (isLoading)
    return (
      <div className="h-screen flex justify-center items-center">
        Data loading ..............
      </div>
    );
  let handleCreateAdmin = async () => {
    const res = await createAdmin({
      AdminName: fromData.AdminName,
      AdminNid: fromData.AdminNid,
      AdminBio: fromData.AdminBio,
      AdminAddress: fromData.AdminAddress,
      AdminPhone: fromData.AdminPhone,
      AdminEmail: fromData.AdminEmail,
    }).unwrap();
    handleResponse(res, setloading, navigate);
  };
  return (
    <div>
      <ToastContainer position="bottom-right" theme="light" />
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
