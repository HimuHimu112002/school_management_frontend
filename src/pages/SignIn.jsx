import { ToastContainer, toast } from 'react-toastify';
const SignIn = () => {

  let handleSignUp = () =>{
    toast.success("Login Successfull");
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <ToastContainer position="top-right" theme="light"/>
      <div className=" w-2/6 mx-auto shadow-xl p-10 rounded-lg">
        <h1 className="text-center text-3xl font-serif">Sign-in</h1>
        <p className="text-xl font-serif mb-2">Enter email</p>
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-5"
        />
        <p className="text-xl font-serif mb-2">Enter password</p>
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
        />
        <button onClick={handleSignUp} className="btn btn-secondary mt-6 w-full">sign-in</button>
      </div>
    </div>
  );
};

export default SignIn;
