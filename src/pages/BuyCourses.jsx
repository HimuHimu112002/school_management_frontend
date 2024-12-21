import AllBuyCourses from "../components/AllBuyCourses";
import Loader from "../loader/Loader";

const BuyCourses = () => {
  return (
    <Loader delay={500}>
      <AllBuyCourses />
    </Loader>
  );
};

export default BuyCourses;
