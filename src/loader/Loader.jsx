import { useEffect, useState } from "react";

const Loader = ({delay, children}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if(loading){
      return (
        <div className="flex flex-col items-center justify-center h-screen ">
          <div className="relative w-20 h-20">
            <div className="absolute border-4 border-t-transparent border-[#F100B7] rounded-full w-full h-full animate-spin"></div>
          </div>
          <p className="mt-4 text-black text-xl font-serif">
            loading...............!
          </p>
        </div>
      );
  }
  return <>{children}</>;
};

export default Loader;
