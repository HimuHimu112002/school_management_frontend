import SuperAdminProfile from "../components/SuperAdminProfile";
import Loader from "../loader/Loader";
const Profile = () => {
  return (
    <Loader delay={500}>
      <SuperAdminProfile />
    </Loader>
  );
};
export default Profile;
