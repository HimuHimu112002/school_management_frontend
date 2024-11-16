import UpdateAdminProfile from "../components/UpdateAdminProfile";
import Loader from "../loader/Loader";
const UpdateAdmin = () => {
  return (
    <Loader delay={500}>
      <UpdateAdminProfile />
    </Loader>
  );
};
export default UpdateAdmin;
