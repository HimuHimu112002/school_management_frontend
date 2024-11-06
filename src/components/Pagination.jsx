//import { useState } from "react";

const Pagination = () => {
//   let [perPageKey,setPerPageKey]=useState(5);

//   const handlePageClick = (event) => {
//     GetProductList(event.selected+1, perPageKey, searchKey)
// };
  return (
    <div className="join mt-4 shadow-lg border border-gray-400">
      <input
        className="join-item btn btn-square"
        type="radio"
        name="options"
        aria-label="1"
        defaultChecked
      />
      <input
        className="join-item btn btn-square"
        type="radio"
        name="options"
        aria-label="2"
      />
      <input
        className="join-item btn btn-square"
        type="radio"
        name="options"
        aria-label="3"
      />
      <input
        className="join-item btn btn-square"
        type="radio"
        name="options"
        aria-label="4"
      />
    </div>
    // <ReactPaginate
    //   previousLabel="<"
    //   nextLabel=">"
    //   pageClassName="page-item"
    //   pageLinkClassName="page-link"
    //   previousClassName="page-item"
    //   previousLinkClassName="page-link"
    //   nextClassName="page-item"
    //   nextLinkClassName="page-link"
    //   breakLabel="..."
    //   breakClassName="page-item"
    //   breakLinkClassName="page-link"
    //   pageCount={Total / perPageKey}
    //   marginPagesDisplayed={2}
    //   pageRangeDisplayed={5}
    //   onPageChange={handlePageClick}
    //   containerClassName="pagination"
    //   activeClassName="active"
    // />
  );
};

export default Pagination;
