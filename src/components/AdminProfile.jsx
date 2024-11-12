import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AdminProfile = () => {
  let params = useParams();
  let [adminData, setAdminData] = useState([]);
  useEffect(() => {
    async function singleAdmin() {
      let data = await axios.get(
        `http://localhost:4000/api/v1/admin-profile/${params.id}`
      );
      setAdminData(data.data.data);
    }
    singleAdmin();
  }, []);
  return (
    <div className="my-10 animate-slideIn">
      <div className="w-2/4 m-auto p-5 bg-gray-900 rounded">
        <div className="w-24 h-24 rounded-full mx-auto flex justify-center items-center">
          <img
            className="w-100 h-100 rounded-full"
            src="https://img.daisyui.com/images/profile/demo/5@94.webp"
            alt="profile"
          ></img>
        </div>
        <div className="shadow-lg p-6 rounded-md">
          <>
            <strong className="text-success">Admin Name :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {adminData?.AdminName}
            </h1>

            <strong className="text-success">Admin Nid :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {adminData?.AdminNid}
            </h1>

            <strong className="text-success">Admin Bio :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {adminData?.AdminBio}
            </h1>

            <strong className="text-success">Admin Address :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {adminData?.AdminAddress}
            </h1>

            <strong className="text-success">Admin Phone :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {adminData?.AdminPhone}
            </h1>

            <strong className="text-success">Admin Email :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {adminData?.AdminEmail}
            </h1>

            <strong className="text-success">Admin Role :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {adminData?.AdminRole}
            </h1>

            <strong className="text-success">Admin Status :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {adminData?.AdminStatus}
            </h1>

            <Link to={`/super-xyz`}>
              <button className="btn btn-success w-full text-white text-xl mt-6 ">
                Back
              </button>
            </Link>
            <Link to={`/updateAdminProfile/${adminData._id}`}>
              <button className="btn btn-success w-full text-white text-xl mt-6 ">
                Update profile
              </button>
            </Link>
          </>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
