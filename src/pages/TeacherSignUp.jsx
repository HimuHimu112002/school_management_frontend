import AddNewTeacher from "../components/AddNewTeacher";
import Loader from "../loader/Loader";
const TeacherSignUp = () => {
  return (
    <Loader delay={500}>
      <AddNewTeacher />
    </Loader>
  );
};
export default TeacherSignUp;
