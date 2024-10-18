const Pagination = () => {
  return (
    <div className="join mt-4">
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
  );
};

export default Pagination;
