import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import Spinner from "../spinner/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/api/SuperAdminapiSlice";
const SignIn = () => {
  let navigate = useNavigate();
  let [loading, setloading] = useState(false);
  let [userEmail, setUserEmail] = useState("");
  let [userPass, setUserPass] = useState("");

  // RTK query POST data successfull start ------
  const [loginData, { isError }] = useLoginMutation();
  if (isError)
    return (
      <div className="h-screen flex justify-center items-center">
        Data loading failed reload the window browser and try agai.
      </div>
    );
  let handleFromdata = (e) => {
    setUserEmail(e.target.value);
  };
  let handleFromdataPass = (e) => {
    setUserPass(e.target.value);
  };
  let handleSignUp = async () => {
    setloading(true);
    try {
      const res = await loginData({
        userEmail: userEmail,
        userPassword: userPass,
      }).unwrap();
      if (res["status"] === "success") {
        toast.success(res.message);
        setTimeout(() => {
          navigate("/");
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
    <div className="flex justify-center items-center h-screen">
      <ToastContainer position="top-right" theme="light" />
      <div className="w-auto lg:w-2/6 mx-auto shadow-xl p-10 rounded-lg border border-red-300">
        <h1 className="text-center text-3xl font-serif">Sign-in</h1>
        <div className="flex justify-center gap-x-3 rounded my-4 cursor-pointer ">
          <img
            className="w-24 px-2 border border-slate-300"
            src="image/google.png"
          ></img>
          <img
            className="w-24 px-2 border border-slate-300"
            src="image/github.png"
          ></img>
          <img
            className="w-24 px-2 border border-slate-300"
            src="image/facebook.png"
          ></img>
        </div>
        <p className="text-xl font-serif mb-2">Enter email</p>
        <input
          type="email"
          placeholder="Email"
          onChange={handleFromdata}
          className="input input-bordered w-full mb-5"
        />
        <p className="text-xl font-serif mb-2">Enter password</p>
        <input
          type="password"
          placeholder="Password"
          onChange={handleFromdataPass}
          className="input input-bordered w-full"
        />
        <Link to="/forgot">
          <p className="text-red-500 text-sm my-2 cursor-pointer">
            Forgot password
          </p>
        </Link>
        {loading ? (
          <Spinner />
        ) : (
          <button
            onClick={handleSignUp}
            className="btn btn-secondary w-full my-2"
          >
            sign-in
          </button>
        )}
      </div>
    </div>
  );
};

export default SignIn;
