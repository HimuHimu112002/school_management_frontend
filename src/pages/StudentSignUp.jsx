import AddNewStudent from "../components/AddNewStudent";
import Loader from "../loader/Loader";
const StudentSignUp = () => {
  return (
    <Loader delay={500}>
      <AddNewStudent />
    </Loader>
  );
};
export default StudentSignUp;
