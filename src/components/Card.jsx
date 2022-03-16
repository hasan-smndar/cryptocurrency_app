import { Link } from "react-router-dom";
import InfoCard from "./InfoCard";
const Card = ({ id, name, image, list }) => {
  if (!list) return "loading";
  return (
    <Link
      to={`/cryptocurrency/${id}`}
      className="shadow-md shadow-gray-900/10 hover:shadow-lg 
      hover:shadow-gray-900/20
       transition-all duration-150 ease-linear"
    >
      <header className="flex justify-between items-center border-b-2 px-4 py-5 ">
        <div className="name text-gray-900 text-lg font-medium">
          <h3>{name}</h3>
        </div>
        <div className="img w-10">
          <img src={image} alt={name} />
        </div>
      </header>
      <div className="body px-4 py-5">
        <ul className="space-y-5">
          {list.map((item, index) => {
            return (
              <InfoCard
                key={index}
                text={item.title}
                value={item.number}
                prenstage={index > 2}
              />
            );
          })}
        </ul>
      </div>
    </Link>
  );
};
export default Card;
