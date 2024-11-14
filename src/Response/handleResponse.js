import { toast } from "react-toastify";
const handleResponse = (res, setLoading, navigate) => {
  setLoading(true);
  if (res.status === "success") {
    toast.success(res.message);
    setTimeout(() => {
      {
        navigate && navigate("/");
      }
      setLoading(false);
    }, 2000);
  } else {
    toast.success(res.message);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }
};
export default handleResponse;
