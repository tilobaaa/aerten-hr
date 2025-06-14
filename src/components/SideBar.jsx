import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { MdGroups3 } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <div>
        {/* logo */}
        <h3>Aerten</h3>
      </div>
      <div>
        <NavLink to="/dashboard">
          {({ isActive }) => (
            <div className={`flex items-center ${isActive ? "flex" : "block"}`}>
              <MdGroups3 />
              <p>Dashboard</p>
              {isActive && <BsArrowDown />}
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
