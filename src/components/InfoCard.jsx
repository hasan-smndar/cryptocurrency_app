import millify from "millify";
import clsx from "clsx";
const InfoCard = ({ text, value, prenstage }) => {
  return (
    <li className="flex items-center">
      <h3 className="text-gray-900  font-medium text-md sm:text-lg">{text}:</h3>
      {!prenstage ? (
        <p className="text-gray-800 font-medium ml-2">
          {millify(value || 0, { precision: 2 })}
        </p>
      ) : (
        <span
          className={clsx(
            { "text-red-700": value < 0 },
            { "text-green-700": value >= 0 },
            "font-bold ml-2"
          )}
        >
          {millify(value || 0)} %
        </span>
      )}
    </li>
  );
};
export default InfoCard;
