import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ProfileSkeleton = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="bg-white p-5 rounded-lg shadow">
        <div className="flex flex-wrap -mx-2 mb-4">
          {[...Array(8)].map((_, index) => (
            <>
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-2 mb-4"
              >
                <Skeleton count={2} height={20} />
              </div>
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-2 mb-4"
              >
                <Skeleton count={2} height={20} />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
