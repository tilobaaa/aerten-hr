import React from "react";
import { NavLink } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs";
import { MdGroups3 } from "react-icons/md";

const SideBarList = ({ item, icon}) => {
  return (
    <NavLink to={`/${item.toLowerCase()}`}>
      {({ isActive }) => (
        <div className={`w-fit py-2 px-4 rounded-full flex items-center gap-4 hover:scale-105 transition-all duration-500 ${isActive ? "bg-[#9A4C1E] text-white" : "text-[#091e42]"}`}>
          <div>
            <div>{icon}</div>
          </div>
          <p>{item}</p>
        </div>
      )}
    </NavLink>
  );
};

export default SideBarList;
