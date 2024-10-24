import { useGetSuperAdminQuery } from "../features/api/SuperAdminapiSlice";
const SuperAdminProfile = () => {
  const {
    data: adminData,
    error: adminError,
    isLoading: adminIsLoading,
  } = useGetSuperAdminQuery();
  if (adminIsLoading)
    return (
      <div className="h-screen flex justify-center items-center">
        Loading...
      </div>
    );

  if (adminError)
    return (
      <div className="h-screen flex justify-center items-center">
        Somthing is wrong ( Admin data loading failed....! ){" "}
      </div>
    );
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
        {adminData?.data?.map((item) => (
          <>
            <h1 className="text-black font-serif" key={item.id}>
              <strong>Super Admin Name :</strong> {item?.AdminName}
            </h1>
            <h1 className="text-black font-serif" key={item.id}>
              <strong>Super Admin Nid :</strong> {item?.AdminNid}
            </h1>
            <h1 className="text-black font-serif" key={item.id}>
              <strong>Super Admin Bio :</strong> {item?.AdminBio}
            </h1>
            <h1 className="text-black font-serif" key={item.id}>
              <strong>Super Admin Address :</strong> {item?.AdminAddress}
            </h1>
            <h1 className="text-black font-serif" key={item.id}>
              <strong>Super Admin Phone :</strong> {item?.AdminPhone}
            </h1>
            <h1 className="text-black font-serif" key={item.id}>
              <strong>Super Admin Email :</strong> {item?.AdminEmail}
            </h1>
            <h1 className="text-black font-serif" key={item.id}>
              <strong>Super Admin Password :</strong> {item?.AdminPassword}
            </h1>
          </>
        ))}
        <button className="btn btn-secondary mt-6 ">Update</button>
      </div>
    </div>
  );
};

export default SuperAdminProfile;
