import UpdateTeacherInfo from "../components/UpdateTeacherInfo";
import Loader from "../loader/Loader";
const UpdateTeacher = () => {
  return (
    <Loader delay={500}>
      <UpdateTeacherInfo />
    </Loader>
  );
};
export default UpdateTeacher;
