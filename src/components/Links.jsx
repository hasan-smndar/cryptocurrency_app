import React from "react";
import NavigationLink from "./NavigationLink";
import { dataLinks } from "../data";
import useGlobal from "../Context/useGlobalContext";
const Links = () => {
  const { closeSideBar } = useGlobal();
  return (
    <ul className="space-y-3">
      {dataLinks.map((item) => {
        return (
          <li key={item.id}>
            <NavigationLink
              text={item.text}
              url={item.url}
              icon={item.icon}
              click={closeSideBar}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
