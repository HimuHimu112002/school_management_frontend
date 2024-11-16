import Exam from "../components/Exam";
import Loader from "../loader/Loader";
const ExamRoom = () => {
  return (
    <Loader delay={500}>
      <Exam />
    </Loader>
  );
};
export default ExamRoom;
