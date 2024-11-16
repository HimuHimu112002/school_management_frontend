import AllStudentInfo from "../components/AllStudentInfo";
import Loader from "../loader/Loader";
const AllStudent = () => {
  return (
    <Loader delay={500}>
      <AllStudentInfo />
    </Loader>
  );
};
export default AllStudent;
