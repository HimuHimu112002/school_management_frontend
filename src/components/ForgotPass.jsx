import { ToastContainer} from "react-toastify";
import { useState } from "react";
import Spinner from "../spinner/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from "../features/api/SuperAdminapiSlice";
import handleResponse from "../Response/handleResponse";

const ForgotPass = () => {
  let navigate = useNavigate();
  let [loading, setloading] = useState(false);
  let [userEmail, setUserEmail] = useState("");
  let [userPass, setUserPass] = useState("");
  // RTK query POST data successfull start ------
  const [postData, { isError }] = useForgotPasswordMutation();
  if (isError)
    return (
      <div className="h-screen flex justify-center items-center">
        Data loading failed reload the window browser and try agai.
      </div>
    );
  let handleForgot = async () => {
    const res = await postData({
      userEmail: userEmail,
      userPassword: userPass,
    }).unwrap();
    handleResponse(res, setloading, navigate);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <ToastContainer position="top-right" theme="light" />
      <div className="w-auto lg:w-2/6 mx-auto shadow-xl border border-secondary p-10 rounded-lg">
        <h1 className="text-center text-3xl font-serif mb-3">
          Forgot Password
        </h1>
        <p className="text-xl font-serif mb-2">Enter email</p>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setUserEmail(e.target.value)}
          className="focus:outline-none focus:border-secondary input input-bordered w-full mb-5"
        />
        <p className="text-xl font-serif mb-2">Enter password</p>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUserPass(e.target.value)}
          className="focus:outline-none focus:border-secondary input input-bordered w-full"
        />
        <Link to="/sign-in">
          <p className="text-red-500 text-sm my-2 cursor-pointer">Login</p>
        </Link>
        {loading ? (
          <Spinner />
        ) : (
          <button
            onClick={handleForgot}
            className="btn btn-secondary w-full my-2"
          >
            Forgot password
          </button>
        )}
      </div>
    </div>
  );
};

export default ForgotPass;
