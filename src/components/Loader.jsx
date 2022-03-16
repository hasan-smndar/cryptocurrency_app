import { PropagateLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className=" grid w-full min-h-[60vh] items-center justify-center">
      <PropagateLoader color="rgba(113,63,18,0.9)" size={25} />
    </div>
  );
};

export default Loader;
