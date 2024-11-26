import { ToastContainer } from "react-toastify";
import { useState } from "react";
import Spinner from "../spinner/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/api/SuperAdminapiSlice";
import { setToken, setUserInfo, setUserRoll } from "../utility/storageUtility";
import handleResponse from "../Response/handleResponse";
import { useDispatch } from "react-redux";
const SignIn = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
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
  let handleSignUp = async () => {
    const res = await loginData({
      userEmail: userEmail,
      userPassword: userPass,
    }).unwrap();

    // set user roll in local storage
    setUserRoll(res.roll);
    // set token in cookie
    setToken(res.token);
    // set res navigate and loading
    handleResponse(res, setloading, navigate);

    // store into redux
    dispatch(res.userInfo);
    setUserInfo(JSON.stringify(res.userInfo));
  };

  let handleLogin = () => {
    window.open(`http://localhost:4000/api/v1/google`, "_self");
  };
  return (
    <div className="flex justify-center items-center h-screen animate-slideIn">
      <ToastContainer position="top-right" theme="light" />
      <div className="w-auto lg:w-2/6 mx-auto shadow-xl p-10 rounded-lg border border-secondary">
        <h1 className="text-center text-3xl font-serif">Sign-in</h1>
        <div className="flex justify-center gap-x-3 rounded my-4 cursor-pointer ">
          <a onClick={handleLogin}>
            <img
              className="w-24 px-2 border border-slate-300"
              src="image/google.png"
            ></img>
          </a>
          <a>
            <img
              className="w-24 px-2 border border-slate-300"
              src="image/github.png"
            ></img>
          </a>
          <a>
            <img
              className="w-24 px-2 border border-slate-300"
              src="image/facebook.png"
            ></img>
          </a>
        </div>
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
