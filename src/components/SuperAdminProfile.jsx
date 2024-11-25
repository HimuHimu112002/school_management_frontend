import { Link } from "react-router-dom";
import { useGetSuperAdminQuery } from "../features/api/SuperAdminapiSlice";
const SuperAdminProfile = () => {
  const { data, error, isLoading } = useGetSuperAdminQuery();
  if (isLoading)
    return (
      <div className="h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="h-screen flex justify-center items-center">
        Somthing is wrong ( Admin data loading failed....! ){" "}
      </div>
    );
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
        <div className="my-4">
          {data?.data?.map((item) => (
            <>
              <strong className="text-success">Super Admin Name :</strong>
              <h1
                className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3"
                key={item.id}
              >
                {item?.AdminName}
              </h1>

              <strong className="text-success">Super Admin Nid :</strong>
              <h1
                className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3"
                key={item.id}
              >
                {item?.AdminNid}
              </h1>

              <strong className="text-success">Super Admin Bio :</strong>
              <h1
                className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3"
                key={item.id}
              >
                {item?.AdminBio}
              </h1>

              <strong className="text-success">Super Admin Address :</strong>
              <h1
                className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3"
                key={item.id}
              >
                {item?.AdminAddress}
              </h1>

              <strong className="text-success">Super Admin Phone :</strong>
              <h1
                className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3"
                key={item.id}
              >
                {item?.AdminPhone}
              </h1>

              <strong className="text-success">Super Admin Email :</strong>
              <h1
                className="font-serif text-white text-xl bg-gray-700 rounded p-2 mb-3"
                key={item.id}
              >
                {item?.AdminEmail}
              </h1>

              <Link to={`/super-xyz`}>
                <button className="btn btn-success text-white text-xl w-full mt-6 ">
                  Update
                </button>
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuperAdminProfile;
