const StudentInvoice = () => {
  return (
    <>
      <div className="text-center font-serif text-xl">Student Invoice</div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 mt-5">
        <div className="bg-red-200 px-3 py-2 rounded-md shadow">
          <h4 className="font-serif text-center py-3">Admission Invoice</h4>
          <p className="font-serif">Student name: xxxx</p>
          <p className="font-serif">Student class: 2</p>
          <p className="font-serif">Student version: English</p>
          <p className="font-serif">Payment ammount: 200</p>
          <p className="font-serif">
            Payment status: <strong className="text-green-500">success</strong>
          </p>
          <p className="font-serif">Admission by admin name: Himu</p>
        </div>
        <div className="bg-red-200 px-3 py-2 rounded-md shadow">
          <h4 className="font-serif text-center py-3">Admission Invoice</h4>
          <p className="font-serif">Student name: xxxx</p>
          <p className="font-serif">Student class: 2</p>
          <p className="font-serif">Student version: English</p>
          <p className="font-serif">Payment ammount: 200</p>
          <p className="font-serif">
            Payment status: <strong className="text-red-500">fail</strong>
          </p>
          <p className="font-serif">Admission by admin name: Himu</p>
        </div>
        <div className="bg-red-200 px-3 py-2 rounded-md shadow">
          <h4 className="font-serif text-center py-3">Admission Invoice</h4>
          <p className="font-serif">Student name: xxxx</p>
          <p className="font-serif">Student class: 2</p>
          <p className="font-serif">Student version: English</p>
          <p className="font-serif">Payment ammount: 200</p>
          <p className="font-serif">
            Payment status: <strong className="text-green-500">success</strong>
          </p>
          <p className="font-serif">Admission by admin name: Himu</p>
        </div>
      </div>
    </>
  );
};

export default StudentInvoice;
