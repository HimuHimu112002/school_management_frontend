import Home from "../components/Home";
import Loader from "../loader/Loader";
const HomePage = () => {
  return (
    <Loader delay={500}>
      <Home />
    </Loader>
  );
};
export default HomePage;
