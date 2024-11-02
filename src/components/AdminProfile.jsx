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
    <div className="my-10">
      <div className="w-24 h-24 bg-red-300 rounded-full mx-auto flex justify-center items-center">
        <img
          className="w-100 h-100 rounded-full"
          src="https://img.daisyui.com/images/profile/demo/5@94.webp"
          alt="profile"
        ></img>
      </div>
      <div className="shadow-lg p-6 rounded-md">
        <>
          <h1 className="text-black font-serif">
            <strong>Admin Name :</strong> {adminData?.AdminName}
          </h1>
          <h1 className="text-black font-serif">
            <strong>Admin Nid :</strong> {adminData?.AdminNid}
          </h1>
          <h1 className="text-black font-serif">
            <strong>Admin Bio :</strong> {adminData?.AdminBio}
          </h1>
          <h1 className="text-black font-serif">
            <strong>Admin Address :</strong> {adminData?.AdminAddress}
          </h1>
          <h1 className="text-black font-serif">
            <strong>Admin Phone :</strong> {adminData?.AdminPhone}
          </h1>
          <h1 className="text-black font-serif">
            <strong>Admin Email :</strong> {adminData?.AdminEmail}
          </h1>
          <h1 className="text-black font-serif">
            <strong>Admin Role :</strong> {adminData?.AdminRole}
          </h1>
          <h1 className="text-black font-serif">
            <strong>Admin Status :</strong> {adminData?.AdminStatus}
          </h1>
          <Link to={`/super-xyz`}>
            <button className="btn btn-secondary mt-6 ">Back</button>
          </Link>
        </>
        {/* {adminData.map((item) => (
        ))} */}
      </div>
    </div>
  );
};

export default AdminProfile;
