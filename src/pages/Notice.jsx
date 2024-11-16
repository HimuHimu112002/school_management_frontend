import NoticeBoard from "../components/NoticeBoard";
import Loader from "../loader/Loader";
const Notice = () => {
  return (
    <Loader delay={500}>
      <div className="p-6 shadow-md rounded-md">
        <h1 className="text-center text-4xl font-serif py-5">
          Important Notice
        </h1>
        <NoticeBoard />
      </div>
    </Loader>
  );
};
export default Notice;
