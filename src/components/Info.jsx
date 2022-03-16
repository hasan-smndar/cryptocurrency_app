import clsx from "clsx";
import millify from "millify";
const Info = ({ title, number, prenstage }) => {
  return (
    <div>
      <h3 className="text-gray-900 font-medium text-base capitalize">
        {title}
      </h3>
      {!prenstage ? (
        <p className="text-lg sm:text-xl ml-2 text-yellow-900 font-medium">
          {millify(number || 0)}
        </p>
      ) : (
        <p
          className={clsx(
            { "text-red-700": number < 0 },
            { "text-green-700": number >= 0 },
            "text-xl ml-2 font-medium"
          )}
        >
          {millify(number || 0)}%
        </p>
      )}
    </div>
  );
};

export default Info;
