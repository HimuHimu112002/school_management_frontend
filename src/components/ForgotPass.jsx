import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import Spinner from "../spinner/Spinner";
import { Link, useNavigate } from "react-router-dom";
const ForgotPass = () => {
  let navigate = useNavigate();
  let [loading, setloading] = useState(false);
  let [userEmail, setUserEmail] = useState("");
  let [userPass, setUserPass] = useState("");

  let handleFromdata = (e) => {
    setUserEmail(e.target.value);
  };
  let handleFromdataPass = (e) => {
    setUserPass(e.target.value);
  };
  let handleForgot = async () => {
    setloading(true);
    let res = await axios.post("http://localhost:4000/api/v1/sign-in", {
      AdminEmail: userEmail,
      AdminPassword: userPass,
    });
    if (res.data["status"] != "success") {
      toast.success(res.data.message);
      setTimeout(() => {
        setloading(false);
      }, 2000);
    } else if (res.data["status"] === "success") {
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/");
        setloading(false);
      }, 2000);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <ToastContainer position="top-right" theme="light" />
      <div className="w-auto lg:w-2/6 mx-auto shadow-xl p-10 rounded-lg">
        <h1 className="text-center text-3xl font-serif mb-3">Forgot Password</h1>
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
            sign-in
          </button>
        )}
      </div>
    </div>
  );
};

export default ForgotPass;
