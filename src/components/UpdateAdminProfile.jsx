import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "../spinner/Spinner";
import { Link, useParams } from "react-router-dom";
import handleResponse from "../Response/handleResponse";
import {
  useGetSingleAdminQuery,
  useUpdateAdminMutation,
} from "../features/api/AdminSlice";
import { GetUserRoll } from "../utility/storageUtility";
import { FaCamera } from "react-icons/fa";
import Loader from "../loader/Loader";

const UpdateAdminProfile = () => {
  let roll = GetUserRoll();
  let params = useParams();
  const fileInputRef = useRef(null);
  // RTK query POST data successfull start ------
  //const [postData, { isError }] = useUpdateAdminMutation();
  let [loading, setloading] = useState(false);
  const [fromData, setFromData] = useState({
    AdminName: "",
    AdminNid: "",
    AdminBio: "",
    AdminAddress: "",
    AdminImage: "",
    AdminPhone: "",
    AdminEmail: "",
  });
  let handleFromdata = (e) => {
    const { files } = e.target;
    setFromData({
      ...fromData,
      [e.target.name]: files ? files[0] : e.target.value,
    });
  };

  // get data
  useEffect(() => {
    const headers = {
      user_id: `${params.id}`,
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
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  let handleSuperAdminData = async () => {
    // const updateData = {
    //   AdminName: fromData.AdminName,
    //   AdminNid: fromData.AdminNid,
    //   AdminBio: fromData.AdminBio,
    //   AdminAddress: fromData.AdminAddress,
    //   AdminImage: fromData.AdminImage,
    //   AdminPhone: fromData.AdminPhone,
    //   AdminEmail: fromData.AdminEmail,
    // };
    // let res = await postData({ data: updateData, id }).unwrap();

    //const postImage = dataUriToBlob(fromData.AdminImage)
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "first_time_using");
    data.append("cloud_name", "dffw2zrr5");
    const resImg = await fetch(
      "https://api.cloudinary.com/v1_1/dffw2zrr5/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const uploadImgUrl = await resImg.json();

    setloading(true);
    const headers = {
      method: "post",
      user_id: params.id,
    };
    let res = await axios.post(
      "http://localhost:4000/api/v1/update-admin",
      {
        AdminName: fromData.AdminName,
        AdminNid: fromData.AdminNid,
        AdminBio: fromData.AdminBio,
        AdminAddress: fromData.AdminAddress,
        AdminImage: uploadImgUrl.url,
        AdminPhone: fromData.AdminPhone,
        AdminEmail: fromData.AdminEmail,
      },
      { headers }
    );
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
    //handleResponse(res, setloading);
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Loader delay={500}>
      <div className="my-10 animate-slideIn">
        <ToastContainer position="bottom-right" theme="light" />
        <div className="m-auto px-3 shadow-lg rounded-md mt-20 border">
          <div className="relative w-32 h-32 rounded-full mx-auto flex justify-center items-center border border-gray-600 p-1">
            <img
              className="w-full h-full rounded-full"
              src={fromData?.AdminImage}
              alt="profile"
            />
            <FaCamera
              onClick={handleIconClick}
              className="text-4xl text-gray absolute right-0 bottom-4 cursor-pointer"
            />
          </div>
          <div className="p-6 rounded-md grid gap-y-2 gap-x-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto">
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <input
              type="text"
              name="AdminName"
              value={fromData?.AdminName}
              onChange={handleFromdata}
              placeholder="Admin Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              value={fromData?.AdminNid}
              name="AdminNid"
              onChange={handleFromdata}
              placeholder="Admin N-id"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              value={fromData?.AdminBio}
              name="AdminBio"
              onChange={handleFromdata}
              placeholder="Admin Bio"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              value={fromData?.AdminAddress}
              name="AdminAddress"
              onChange={handleFromdata}
              placeholder="Admin Address"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              value={fromData?.AdminPhone}
              name="AdminPhone"
              onChange={handleFromdata}
              placeholder="Admin Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              value={fromData?.AdminEmail}
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
            {roll === "Super-Admin" ? (
              <Link to="/super-xyz">
                <button className="btn btn-secondary w-full">Back</button>
              </Link>
            ) : (
              <Link to="/PersonalAdminProfile">
                <button className="btn btn-secondary w-full">Back</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Loader>
  );
};

export default UpdateAdminProfile;
