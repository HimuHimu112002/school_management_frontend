import PersonalAdminProfile from "../components/PersonalAdminProfile";
import Loader from "../loader/Loader";
const PersonalAdmin = () => {
  return (
    <Loader delay={500}>
      <PersonalAdminProfile />
    </Loader>
  );
};
export default PersonalAdmin;
