const AllBuyCourses = () => {
  return (
    <div className="px-3">
      <h1 className="text-center font-serif text-3xl my-5">
        Buy this course and grow your skill.
      </h1>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Another Business
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <h5>
            Price: <strong>500</strong>
          </h5>
          <div className="card-actions justify-start">
            <div className="badge badge-outline cursor-pointer">English</div>
            <div className="badge badge-outline cursor-pointer">Bangla</div>
          </div>
          <button className="btn btn-secondary">Veiw course details</button>
        </div>
      </div>
    </div>
  );
};

export default AllBuyCourses;
