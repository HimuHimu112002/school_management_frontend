import Pagination from "./Pagination";
import SelectStudentClass from "./SelectStudentClass";

const NoticeBoard = () => {
  return (
    <>
      <SelectStudentClass />

      <div className="card bg-base-100 w-96 shadow-xl animate-slideIn">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary w-full">Read more</button>
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default NoticeBoard;
