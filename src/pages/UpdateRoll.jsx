import UpdateStudentRoll from "../components/UpdateStudentRoll";
import Loader from "../loader/Loader";
const UpdateRoll = () => {
  return (
    <Loader delay={500}>
      <UpdateStudentRoll />
    </Loader>
  );
};
export default UpdateRoll;
