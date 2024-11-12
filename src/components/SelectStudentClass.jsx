const SelectStudentClass = () => {
  return (
    <div className="w-full mb-5">
      <h3 className="mb-4 text-xl font-serif">Select student class</h3>
      <select className="select select-bordered max-w-xs w-full">
        <option disabled selected>
          Select Class
        </option>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
        <option>Four</option>
        <option>Five</option>
      </select>
    </div>
  );
};

export default SelectStudentClass;
