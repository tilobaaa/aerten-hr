import React from "react";
import { MdGroups3 } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LuScrollText } from "react-icons/lu";
import { IoPieChartSharp } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import SideBarList from "./SideBarList";
import logoImg from "../assets/logo.png";

const SideBar = () => {
  return (
    <div className="w-1/6 p-8 flex flex-col h-screen border-r border-gray-200">
      <div className="flex items-center ">
        <img className="h-10 object-cover" src={logoImg} alt="" />
        <h3 className="">Aerten</h3>
      </div>
      <div className="flex flex-col gap-4  my-8">
        <SideBarList item={"Dashboard"} icon={<MdGroups3 />} />
        <SideBarList item={"Roles"} icon={<IoBriefcaseOutline />} />
        <SideBarList item={"Employees"} icon={<MdGroups3 />} />
        <SideBarList item={"Payroll"} icon={<LuScrollText />} />
        <SideBarList item={"Reports"} icon={<IoPieChartSharp />} />
        <SideBarList item={"Settings"} icon={<CiSettings />} />
      </div>
      <div className="mt-auto flex items-center gap-4 cursor-pointer hover:scale-105 transition-all duration-500">
        <IoIosLogOut/>
        <p>Log out</p>
      </div>
      
    </div>
  );
};

export default SideBar;
