import { Link, useParams } from "react-router-dom";
import { useGetAdminProfileAccessSuperAdminQuery } from "../features/api/SuperAdminapiSlice";

const AdminProfile = () => {
  let { id } = useParams();
  const {
    data: adminData,
    error: adminError,
    isLoading: adminIsLoading,
  } = useGetAdminProfileAccessSuperAdminQuery(id);
  
  if (adminIsLoading)
    return (
      <div className="h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  if (adminError)
    return (
      <div className="h-screen flex justify-center items-center">
        Data loading failed try agai.
      </div>
    );
  return (
    <div className="my-10 animate-slideIn">
      <div className="w-2/4 m-auto p-5 bg-gray-900 rounded">
        <div className="w-24 h-24 rounded-full mx-auto flex justify-center items-center">
          {adminData?.data?.AdminImage ? (
            <img
              className="w-full h-full rounded-full"
              src={adminData?.data?.AdminImage}
              alt="Avatar Tailwind CSS Component"
            />
          ) : (
            <img
              className="w-full h-full rounded-full"
              src="image/test/jpg"
              alt="Avatar Tailwind CSS Component"
            />
          )}
        </div>
        <div className="shadow-lg p-6 rounded-md">
          <>
            <strong className="text-success">Admin Name :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {adminData?.data?.AdminName}
            </h1>

            <strong className="text-success">Admin Nid :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {adminData?.data?.AdminNid}
            </h1>

            <strong className="text-success">Admin Bio :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {adminData?.data?.AdminBio}
            </h1>

            <strong className="text-success">Admin Address :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {adminData?.data?.AdminAddress}
            </h1>

            <strong className="text-success">Admin Phone :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {adminData?.data?.AdminPhone}
            </h1>

            <strong className="text-success">Admin Email :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {adminData?.data?.AdminEmail}
            </h1>

            <strong className="text-success">Admin Role :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {adminData?.data?.AdminRole}
            </h1>

            <strong className="text-success">Admin Status :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {adminData?.data?.AdminStatus}
            </h1>

            <Link to={`/super-xyz`}>
              <button className="btn btn-secondary w-full text-white text-xl mt-6 ">
                Back
              </button>
            </Link>
            <Link to={`/updateAdminProfile/${adminData?.data?._id}`}>
              <button className="btn btn-secondary w-full text-white text-xl mt-6 ">
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
