import { NavLink } from "react-router-dom";
import clsx from "clsx";
const NavigationLink = ({ text, url, icon, click }) => {
  return (
    <>
      <NavLink
        to={url}
        className={({ isActive }) =>
          clsx(
            " flex items-center space-x-2",
            "text-gray-700 capitalize font-medium text-lg",
            "hover:bg-gray-100 p-2",
            {
              "text-black": isActive,
            }
          )
        }
        onClick={click}
      >
        <span>{icon}</span>
        <span>{text}</span>
      </NavLink>
    </>
  );
};

export default NavigationLink;
