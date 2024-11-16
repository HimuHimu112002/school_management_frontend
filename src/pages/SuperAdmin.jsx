import SuperAdminForm from "../components/SuperAdminForm";
import Loader from "../loader/Loader";
const SuperAdmin = () => {
  return (
    <Loader delay={500}>
      <SuperAdminForm />
    </Loader>
  );
};
export default SuperAdmin;
