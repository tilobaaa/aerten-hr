import React, { useState } from "react";
import helpSvg from "../../assets/help-circle.svg";
import AllEmployees from "./Permissions Folder/AllEmployees";
import Custom from "./Permissions Folder/Custom";

const Permissions = () => {
  const [clickedOption, setClickedOption] = useState("employees");
  return (
    <div className="my-[2.44rem] py-[2.37rem] px-[1.88rem] rounded-[0.625rem] border-1 border-[#eff1f4] ">
      <div className="flex flex-col gap-3 border-b-1 border-[#eff1f4] pb-[1.56rem]">
        <div className="flex items-start w-fit">
          <p className="text-[#0e2354] text-lg font-semibold">Owner (Admin)</p>
          <div className="relative group">
            <img
              className="w-4 h-4 rounded-full cursor-pointer "
              src={helpSvg}
              alt=""
            />
            <p className="hidden group-hover:block py-[0.68rem] px-[1.625rem] text-xs font-medium text-[#676e7e] rounded-[1.25rem] bg-[#eff1f4] w-[17rem] absolute">
              Every member gets basic permissions and functionality by default.
              You can customize settings for all members and teams or make local
              adjustments for indvidual user profiles
            </p>
          </div>
        </div>
        <p className="text-sm text-[#676e7e]">
          Owners have view and edit access to user mgt by default which cannot
          be changed
        </p>
      </div>

      <div className="px-[1.88rem] py-[1.94rem]">
        <div className="flex flex-col gap-3 pb-8 border-b-1 border-[#eff1f4]">
          <p className="text-lg font-semibold text-[#0e2354]">
            Set permissions
          </p>
          <p className="text-sm text-[#676e7e]">
            {clickedOption === "custom"
              ? "Modify what Individuals on this role can do"
              : "Modify access and permission for teams and individuals"}{" "}
          </p>
        </div>

        <div className="pt-[2.13rem] border-b-1 border-[#EAECF0] flex gap-4 ">
          <button
            onClick={() => {
              setClickedOption("teams");
            }}
            className={`cursor-pointer text-sm font-medium pb-4 ${
              clickedOption === "teams"
                ? "text-[#6A1039] border-b-2 border-[#6A1039]"
                : "text-[#667085]"
            }`}
          >
            For all teams
          </button>
          <button
            onClick={() => {
              setClickedOption("roles");
            }}
            className={`cursor-pointer text-sm font-medium pb-4 ${
              clickedOption === "roles"
                ? "text-[#6A1039] border-b-2 border-[#6A1039]"
                : "text-[#667085]"
            }`}
          >
            For all roles
          </button>
          <button
            onClick={() => {
              setClickedOption("employees");
            }}
            className={`cursor-pointer text-sm font-medium pb-4 ${
              clickedOption === "employees"
                ? "text-[#6A1039] border-b-2 border-[#6A1039]"
                : "text-[#667085]"
            }`}
          >
            For all employees
          </button>
          <button
            onClick={() => {
              setClickedOption("admins");
            }}
            className={`cursor-pointer text-sm font-medium pb-4 ${
              clickedOption === "admins"
                ? "text-[#6A1039] border-b-2 border-[#6A1039]"
                : "text-[#667085]"
            }`}
          >
            For Admins
          </button>
          <button
            onClick={() => {
              setClickedOption("custom");
            }}
            className={`cursor-pointer text-sm font-medium pb-4 flex flex-start ${
              clickedOption === "custom"
                ? "text-[#6A1039] border-b-2 border-[#6A1039]"
                : "text-[#667085]"
            }`}
          >
            <p>Custom</p>
            <div className="relative group">
              <img
                className="w-4 h-4 rounded-full  "
                src={helpSvg}
                alt=""
              />
              <p className="hidden group-hover:block py-[0.68rem]  text-xs text-left font-medium text-[#676e7e] rounded-[1.25rem] bg-[#eff1f4] w-[10.875rem]  absolute">
                If you need to set permission for a specific team, role or
                Individual, click here to search and add them
              </p>
            </div>
          </button>
        </div>
      </div>
      <div>
        {clickedOption === "employees" && <AllEmployees />}
        {clickedOption === "custom" && <Custom />}
      </div>
    </div>
  );
};

export default Permissions;
