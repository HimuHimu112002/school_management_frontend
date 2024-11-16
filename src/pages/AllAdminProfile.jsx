import AdminProfile from "../components/AdminProfile";
import Loader from "../loader/Loader";
const AllAdminProfile = () => {
  return (
    <Loader delay={500}>
      <AdminProfile />
    </Loader>
  );
};
export default AllAdminProfile;
