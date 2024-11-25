import { MdArrowLeft } from "react-icons/md";
import { RiArrowRightSFill } from "react-icons/ri";
import PropTypes from "prop-types";
const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  return (
    <>
      <button
        className="bg-secondary p-2 rounded-full text-white mt-5 ml-4 cursor-pointer"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        <MdArrowLeft />
      </button>

      <span className="mx-2 bg-secondary p-2 rounded text-white mt-4 cursor-pointer">{`Page ${currentPage} of ${totalPages}`}</span>

      <button
        className="bg-secondary p-2 rounded-full text-white mt-4 cursor-pointer"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        <RiArrowRightSFill />
      </button>
    </>
  );
};
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
export default Pagination;
