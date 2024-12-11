import { Link } from "react-router-dom";
import { getToken } from "../utility/storageUtility";
import { useGetAdminPersonalInfoQuery } from "../features/api/SuperAdminapiSlice";
//const AxiosHeader = { headers: { token: getToken() } };

const PersonalAdminProfile = () => {
  let token = getToken();
  const { data, error, isLoading } = useGetAdminPersonalInfoQuery(token);
  if (isLoading)
    return (
      <div className="h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="h-screen flex justify-center items-center">
        Data loading failed try agai.
      </div>
    );
  return (
    <div className="my-4 animate-slideIn">
      <div className="w-2/4 m-auto p-5 bg-gray-300 rounded">
        <div className="w-24 h-24 border rounded-full mx-auto flex justify-center items-center">
          {data?.data?.AdminName ? (
            <img
              className="w-full h-full rounded-full"
              src={data?.data?.AdminImage}
              alt="profile"
            />
          ) : (
            <img className="w-full h-full rounded-full" src="image/test.jpg" />
          )}
        </div>
        <div className="rounded-md">
          <>
            <strong className="text-success">Admin Name :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {data?.data?.AdminName}
            </h1>

            <strong className="text-success">Admin Nid :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {data?.data?.AdminNid}
            </h1>

            <strong className="text-success">Admin Bio :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {data?.data?.AdminBio}
            </h1>

            <strong className="text-success">Admin Address :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {data?.data?.AdminAddress}
            </h1>

            <strong className="text-success">Admin Phone :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {data?.data?.AdminPhone}
            </h1>

            <strong className="text-success">Admin Email :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {data?.data?.AdminEmail}
            </h1>

            <strong className="text-success">Admin Role :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {data?.data?.AdminRole}
            </h1>

            <strong className="text-success">Admin Status :</strong>
            <h1 className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3">
              {data?.data?.AdminStatus}
            </h1>
            <Link to={`/updateAdminProfile/${data?.data?._id}`}>
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

export default PersonalAdminProfile;
