import ClassRoom from "../components/ClassRoom";
import Loader from "../loader/Loader";
const ClassRoomInfo = () => {
  return (
    <Loader delay={500}>
      <div className="p-6 shadow-md">
        <ClassRoom />
      </div>
    </Loader>
  );
};
export default ClassRoomInfo;
