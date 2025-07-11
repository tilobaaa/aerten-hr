import React, { useState } from "react";
import SideBar from "../components/SideBar";
import bellSvg from "../assets/bell.svg";
import searchSvg from "../assets/search.svg";
import settingsSvg from "../assets/settings.svg";
import profileSvg from "../assets/profile-pic.svg";
import helpCircleSvg from "../assets/help-circle.svg";
import downloadSvg from "../assets/download.svg";
import addSvg from "../assets/add.svg";
import filterSvg from "../assets/filters-lines.svg";
import listUnordered from "../assets/list_unordered.svg";
import elementSvg from "../assets/element.svg";
import All from "../components/Roles/All";
import Permissions from "../components/Roles/Permissions";
import { useNavigate } from "react-router-dom";

const Roles = () => {
  const [clickedOption, setClickedOption] = useState("all");
  const [rolesClickedOption, setRolesClickedOption] = useState("all");
  const navigate = useNavigate();
  return (
    <div className="flex">
      <SideBar />
      <main className="ml-56 w-full  py-4">
        <div className="flex gap-4 items-center justify-between border-b border-gray-300 px-8 pb-2 ">
          <div className=" relative w-156">
            <img
              className="absolute w-6 h-6 top-1/2 -translate-y-1/2 left-2"
              src={searchSvg}
              alt=""
            />
            <input
              className="w-full px-4 py-2 text-sm pl-10 focus:outline-none"
              type="text"
              placeholder="Search anything here"
            />
          </div>
          {/* nav icons */}
          <div className="flex gap-6">
            <img
              className="cursor-pointer hover:translate-y-[-4px] transition-all duration-300"
              src={settingsSvg}
              alt=""
            />
            <img
              className="cursor-pointer hover:translate-y-[-4px] transition-all duration-300"
              src={bellSvg}
              alt=""
            />
            {/* profile details */}
            <div>
              <img className="h-10 w-10 rounded-full" src={profileSvg} alt="" />
            </div>
          </div>
        </div>

        <div className="w-full p-8">
          <div className="flex justify-between items-center">
            <div className="flex items-start font-medium">
              <h3 className="text-[#101828] text-2xl">Roles</h3>
              <img className="w-4 h-4" src={helpCircleSvg} alt="" />
              <p className="text-xs text-[#93312B] px-2 py-1 -mt-1 bg-[#F9F5FF] rounded-2xl">
                123
              </p>
            </div>
            <div className="flex gap-2">
              <button className="py-2 px-4 flex items-center gap-2 border-1 border-[#E6E7EC] rounded-lg cursor-pointer scale-105 transition-all duration-500">
                <img className="w-4 h-4" src={downloadSvg} alt="" />
                <p className="text-sm text-[#0E2354]">Assign</p>
              </button>
              <button onClick={()=>{navigate('/roles/new')}} className="py-2 px-4 flex items-center gap-2 bg-[#6A1039]  rounded-lg cursor-pointer scale-105 transition-all duration-500">
                <img className="w-4 h-4" src={addSvg} alt="" />
                <p className="text-sm text-white">New Role</p>
              </button>
            </div>
          </div>

          <div className="mt-10 border-b-1 border-[#EAECF0] flex gap-4">
            <button
              onClick={() => {
                setClickedOption("all");
              }}
              className={`cursor-pointer text-sm font-medium py-4 ${
                clickedOption === "all"
                  ? "text-[#6A1039] border-b-2 border-[#6A1039]"
                  : "text-[#667085]"
              }`}
            >
              All Roles
            </button>
            <button
              onClick={() => {
                setClickedOption("permissions");
              }}
              className={`cursor-pointer text-sm font-medium py-4 ${
                clickedOption === "permissions"
                  ? "text-[#6A1039] border-b-2 border-[#6A1039]"
                  : "text-[#667085]"
              }`}
            >
              Permissions
            </button>
          </div>

          {/* all roles */}
          {clickedOption === "all" && (
            <div>
              {/* search roles */}
              <div className="flex justify-between px-4 border-1 border-[#EFF1F4] rounded-[0.43rem] my-[0.69rem] ">
                <div className="relative p-4 w-[30.1875rem]">
                  <img
                    className="absolute w-4 h-4 top-1/2 -translate-1/2"
                    src={searchSvg}
                    alt=""
                  />
                  <input
                    className="text-sm ml-6 focus:outline-none w-full"
                    type="text"
                    placeholder="Search Roles by Title, Teams or any related keywords"
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

              {/* options */}
              <div className="border-b-1 border-[#EAECF0]">
                <button
                  onClick={() => {
                    setRolesClickedOption("all");
                  }}
                  className={`text-sm font-medium  cursor-pointer p-4 ${
                    rolesClickedOption === "all"
                      ? "text-[#6a1039] border-b-1 border-[#6a1039]"
                      : "text-[#667085]"
                  } `}
                >
                  All
                </button>
                <button
                  onClick={() => {
                    setRolesClickedOption("product");
                  }}
                  className={`text-sm font-medium  cursor-pointer p-4 ${
                    rolesClickedOption === "product"
                      ? "text-[#6a1039] border-b-1 border-[#6a1039]"
                      : "text-[#667085]"
                  } `}
                >
                  Product
                </button>
                <button
                  onClick={() => {
                    setRolesClickedOption("engineering");
                  }}
                  className={`text-sm font-medium cursor-pointer p-4 ${
                    rolesClickedOption === "engineering"
                      ? "text-[#6a1039] border-b-1 border-[#6a1039]"
                      : "text-[#667085]"
                  } `}
                >
                  Engineering
                </button>
                <button
                  onClick={() => {
                    setRolesClickedOption("marketing");
                  }}
                  className={`text-sm font-medium cursor-pointer p-4 ${
                    rolesClickedOption === "marketing"
                      ? "text-[#6a1039] border-b-1 border-[#6a1039]"
                      : "text-[#667085]"
                  } `}
                >
                  Marketing
                </button>
                <button
                  onClick={() => {
                    setRolesClickedOption("recruitment");
                  }}
                  className={`text-sm font-medium  cursor-pointer p-4 ${
                    rolesClickedOption === "recruitment"
                      ? "text-[#6a1039] border-b-1 border-[#6a1039]"
                      : "text-[#667085]"
                  } `}
                >
                  Recruitment
                </button>
                <button
                  onClick={() => {
                    setRolesClickedOption("sales");
                  }}
                  className={`text-sm font-medium  cursor-pointer p-4 ${
                    rolesClickedOption === "sales"
                      ? "text-[#6a1039] border-b-1 border-[#6a1039]"
                      : "text-[#667085]"
                  } `}
                >
                  Sales
                </button>
                <button
                  onClick={() => {
                    setRolesClickedOption("cs");
                  }}
                  className={`text-sm font-medium  cursor-pointer p-4 ${
                    rolesClickedOption === "cs"
                      ? "text-[#6a1039] border-b-1 border-[#6a1039]"
                      : "text-[#667085]"
                  } `}
                >
                  Customer Service
                </button>
              </div>

              {/* what to show when the votton is clicked */}
              <div className="my-[1.44rem]">
                <All />
              </div>
            </div>
          )}

          {/* if you clicked on permissions */}
          {clickedOption === "permissions" && (<Permissions/>)}
        </div>
      </main>
    </div>
  );
};

export default Roles;
