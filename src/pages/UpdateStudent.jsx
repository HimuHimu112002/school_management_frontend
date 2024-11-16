import UpdateStudentInfo from "../components/UpdateStudentInfo";
import Loader from "../loader/Loader";
const UpdateStudent = () => {
  return (
    <Loader delay={500}>
      <UpdateStudentInfo />
    </Loader>
  );
};
export default UpdateStudent;
