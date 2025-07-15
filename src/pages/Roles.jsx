import React, { useState } from "react";
import SideBar from "../components/SideBar";
import plusSvg from '../assets/plus.svg';
import bellSvg from "../assets/bell.svg";
import searchSvg from "../assets/search.svg";
import settingsSvg from "../assets/settings.svg";
import profileSvg from "../assets/profile-pic.svg";
import helpCircleSvg from "../assets/help-circle.svg";
import downloadSvg from "../assets/download.svg";
import addSvg from "../assets/add.svg";
import filterSvg from "../assets/filters-lines.svg";
import listUnordered from "../assets/list_unordered.svg";
import briefcaseSvg from "../assets/briefcase.svg";
import elementSvg from "../assets/element.svg";
import employeePng from "../assets/employee-avatar.png";
import All from "../components/Roles/All";
import Permissions from "../components/Roles/Permissions";
import { Link, useNavigate } from "react-router-dom";

const Roles = () => {
  const [clickedOption, setClickedOption] = useState("all");
  const [rolesClickedOption, setRolesClickedOption] = useState("all");

  const [isConfirmed, setIsConfirmed] = useState(false);

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
              <button
                onClick={() => {
                  setIsConfirmed(true);
                }}
                className="py-2 px-4 flex items-center gap-2 border-1 border-[#E6E7EC] rounded-lg cursor-pointer scale-105 transition-all duration-500"
              >
                <img className="w-4 h-4" src={downloadSvg} alt="" />
                <p className="text-sm text-[#0E2354]">Assign</p>
              </button>
              <button
                onClick={() => {
                  navigate("/roles/new");
                }}
                className="py-2 px-4 flex items-center gap-2 bg-[#6A1039]  rounded-lg cursor-pointer scale-105 transition-all duration-500"
              >
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
          {clickedOption === "permissions" && <Permissions />}
        </div>
      </main>

      {isConfirmed && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
          <div
            onClick={() => {
              setIsConfirmed(false);
            }}
            className="fixed -z-20 top-0 left-0 w-screen h-screen bg-[#344054ab]  "
          ></div>
          <div className="z-50 bg-white rounded-xl w-[32.875rem] h-[28.937rem] p-10 pb-[3.875rem] flex flex-col gap-[1.88rem] ">
            <div className="w-fit pt-[0.625rem] px-3 pb-[0.875rem] bg-[#ffe6ef] rounded-[1.75rem]">
              <img className="w-6 h-6 " src={briefcaseSvg} alt="" />
            </div>
            <div>
              <h5>Assign a role</h5>
              <div className="flex items-center gap-2">
                <p className="text-sm text-[#667085]">
                  Select a role to assign to:
                </p>
                <div>
                  <input
                    className="text-sm focus:outline-none"
                    type="text"
                    placeholder="Type Employee name"
                  />
                  <div className="flex items-center gap-1 rounded-2xl bg-[#f5f6f7] py-[0.125rem] px-2 w-fit ">
                    {" "}
                    <img
                      className="w-[1.125rem] h-[1.125rem] rounded-[12.5rem]"
                      src={employeePng}
                      alt=""
                    />
                    <p className="text-[#091e42] text-sm font-medium">Name</p>
                    <p
                      onClick={""}
                      className="text-xs text-[#091e42] cursor-pointer"
                    >
                      x
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative">
                <img
                  className="absolute w-5 h-5 -translate-y-1/2 top-1/2"
                  src={searchSvg}
                  alt=""
                />
                <input
                  className="text-[#5d6b82] text-sm pl-6 focus:outline-none"
                  type="text"
                  placeholder="Search for existing roles"
                />
                <img
                  className="absolute w-5 h-5 -translate-y-1/2 top-1/2 right-2"
                  src={helpCircleSvg}
                  alt=""
                />
              </div>
              <Link to={'/roles/new'} className="px-4 py-[0.62rem] flex items-center gap-2 border border-[#e6e7ec] rounded-[1.8125rem] cursor-pointer w-fit">
                <img className="w-4 h-4" src={plusSvg} alt="" />
                <p className="text-[#0e2354] text-sm">Create new role</p>
                <img className="w-4 h-4" src={helpCircleSvg} alt="" />
              </Link>
            </div>

           <button className="rounded-lg border border-[#6a1039] bg-[#6a1039] w-full shadow-sm py-[0.625rem] text-sm font-semibold text-white cursor-pointer">Assign</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roles;
