import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const StudentInvoice = () => {
  let [admin, setAdmin] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setItemsPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    async function allAdmin() {
      try {
        let data = await axios.get(
          `http://localhost:4000/api/v1/get-invoice/${currentPage}/${perPage}`
        );
        setAdmin(data.data.data[0].Rows);
        setTotalPages(data.data.totalPages);
        setItemsPerPage(data.data.perPage);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    allAdmin();
  }, [currentPage, perPage]);
  // student invoice data get successfull end ----------------
  return (
    <>
      <div className="text-center font-serif text-xl">Student Invoice</div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 mt-5">
        {admin.map((item, i) => (
          <div key={i} className="my-1 bg-red-200 px-3 py-2 rounded-md shadow">
            <h4 className="font-serif text-center py-3">Admission Invoice</h4>
            <p className="font-serif">Student name: {item?.student_name}</p>
            <p className="font-serif">Student class: {item?.student_class}</p>
            <p className="font-serif">Student version: English</p>
            <p className="font-serif">Payment ammount: {item?.total_amount}</p>
            <p className="font-serif">
              Payment status:{" "}
              {item?.payment_status === "success" ? (
                <strong className="text-green-500">
                  {item?.payment_status}
                </strong>
              ) : (
                <strong className="text-red-500">{item?.payment_status}</strong>
              )}
            </p>
            <p className="font-serif">Payment currency: {item?.currency}</p>
            <p className="font-serif">Payment tran_id: {item?.tran_id}</p>
            <p className="font-serif">Admission by admin name: Himu</p>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default StudentInvoice;
