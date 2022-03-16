import { IoCloseSharp } from "react-icons/io5";
import clsx from "clsx";
const CloseButton = ({ click }) => {
  return (
    <button
      className={clsx(
        "text-4xl text-yellow-900 rounded",
        "hover:bg-gray-200 focus:ring focus:ring-yellow-900/40",
        "transition duration-300 ease-linear"
      )}
      onClick={click}
    >
      <IoCloseSharp />
    </button>
  );
};

export default CloseButton;
