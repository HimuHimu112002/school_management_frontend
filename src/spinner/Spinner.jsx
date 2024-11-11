import { Oval } from "react-loader-spinner";
const Spinner = () => {
  return (
    <button className="btn btn-secondary w-full">
      <Oval
        visible={true}
        height="42"
        width="42"
        color="white"
        strokeWidth="5"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </button>
  );
};
export default Spinner;
// render()
