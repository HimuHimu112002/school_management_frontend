import StudentInvoice from "../components/StudentInvoice";
import Loader from "../loader/Loader";

const Invoice = () => {
  return (
    <Loader delay={500}>
      <div className="p-6 shadow-md">
        <StudentInvoice />
      </div>
    </Loader>
  );
};

export default Invoice;
