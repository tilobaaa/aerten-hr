import React, { useState } from "react";
import helpCircleSvg from "../../assets/help-circle.svg";
import downloadSvg from "../../assets/download.svg";
import addSvg from "../../assets/add.svg";
import searchSvg from "../../assets/search.svg";
import filterSvg from '../../assets/filters-lines.svg';
import listUnordered from '../../assets/list_unordered.svg'
import elementSvg from '../../assets/element.svg'
import EmployeeList from "./EmployeeList";

const MainEmployeesBar = () => {
  const [clickedOption, setClickedOption] = useState("employees");
  return (
    <div className="w-full p-8">
      <div className="flex justify-between items-center">
        <div className="flex items-start font-medium">
          <h3 className="text-[#101828] text-2xl">Employees</h3>
          <img className="w-4 h-4" src={helpCircleSvg} alt="" />
          <p className="text-xs text-[#93312B] px-2 py-1 -mt-1 bg-[#F9F5FF] rounded-2xl">
            100
          </p>
        </div>
        <div className="flex gap-2">
          <button className="py-2 px-4 flex items-center gap-2 border-1 border-[#E6E7EC] rounded-lg cursor-pointer scale-105 transition-all duration-500">
            <img className="w-4 h-4" src={downloadSvg} alt="" />
            <p className="text-sm text-[#0E2354]">Export</p>
          </button>
          <button className="py-2 px-4 flex items-center gap-2 bg-[#6A1039]  rounded-lg cursor-pointer scale-105 transition-all duration-500">
            <img className="w-4 h-4" src={addSvg} alt="" />
            <p className="text-sm text-white">New Employee</p>
          </button>
        </div>
      </div>
      <div className="mt-10 border-b-1 border-[#EAECF0] flex gap-4">
        <button
          onClick={() => {
            setClickedOption("employees");
          }}
          className={`cursor-pointer text-sm font-medium py-4 ${
            clickedOption === "employees"
              ? "text-[#6A1039] border-b-2 border-[#6A1039]"
              : "text-[#667085]"
          }`}
        >
          All Employees
        </button>
        <button
          onClick={() => {
            setClickedOption("teams");
          }}
          className={`cursor-pointer text-sm font-medium py-4 ${
            clickedOption === "teams"
              ? "text-[#6A1039] border-b-2 border-[#6A1039]"
              : "text-[#667085]"
          }`}
        >
          Teams
        </button>
        <button
          onClick={() => {
            setClickedOption("roles");
          }}
          className={`cursor-pointer text-sm font-medium py-4 ${
            clickedOption === "roles"
              ? "text-[#6A1039] border-b-2 border-[#6A1039]"
              : "text-[#667085]"
          }`}
        >
          Roles
        </button>
      </div>
      {/* search employees */}
      <div className="flex justify-between px-4 border-1 border-[#EFF1F4] rounded-[0.43rem] my-[0.69rem]">
        <div className="relative p-4 w-[30.1875rem]">
          <img className="absolute w-4 h-4 top-1/2 -translate-1/2" src={searchSvg} alt="" />
          <input
            className="text-sm ml-6 focus:outline-none w-full"
            type="text"
            placeholder="Search Employee by name, role, ID or any related keywords"
          />
        </div>
        <div className="flex gap-2 items-center">
          <button className="py-[0.62rem] px-4 flex gap-2 rounded-lg border-1 border-[#EFEFEF] ">
            <img className="w-5 h-5" src={filterSvg} alt="" />
            <p className="text-sm text-[#344054]">Filter</p>
          </button>
          <button className="py-[0.62rem] px-4 flex gap-2 rounded-lg bg-[#EFEFEF] ">
            <img className="w-6 h-6" src={listUnordered} alt="" />
          </button>
          <button className="py-[0.62rem] px-4 flex gap-2 rounded-lg border-1 border-[#EFEFEF] ">
            <img className="w-6 h-6" src={elementSvg} alt="" />
          </button>
        </div>
      </div>
      {/* list of employees */}
      <EmployeeList/>
    </div>
  );
};

export default MainEmployeesBar;
