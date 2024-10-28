import { RotatingLines } from "react-loader-spinner";
const Spinner = () => {
  return (
    <button className="btn btn-secondary w-full">
      <RotatingLines
        visible={true}
        height="42"
        width="42"
        color="white"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </button>
  );
};
export default Spinner;
