import AllTeacherInfo from "../components/AllTeacherInfo";
import Loader from "../loader/Loader";
const AllTeachers = () => {
  return <Loader delay={500}><AllTeacherInfo /></Loader>;
};
export default AllTeachers;
