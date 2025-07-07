import React from "react";
import editSvg from "../../assets/edit-2.svg";
import ToggleButton from "../utilities/ToggleButton";

const Permission = () => {
  return (
    <div className="basis-1/2 border-1 border-[#dff2e6] px-[2.44rem] py-[1.96rem] rounded-[0.9375rem]">
      <div className="pb-8 mb-4 border-b-1 border-[#eaecf0] flex justify-between">
        <p className="text-[#091e42] text-xl font-black">Role Permissions</p>
        <img
          className="w-6 h-6 rounded-full cursor-pointer"
          src={editSvg}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-[1.94rem]">
        <div className="flex items-center gap-3 py-4 border-b-1 border-[#eaecf0]">
          <ToggleButton />
          <div className="flex flex-col text-sm">
            <p className="text-[#091e42] font-black">Can add or delete employee</p>
            <p className="text-[#909dad]">This enables general access to employee information</p>
          </div>
        </div>
        <div className="flex items-center gap-3 py-4 border-b-1 border-[#eaecf0]">
          <ToggleButton />
          <div className="flex flex-col text-sm">
            <p className="text-[#091e42] font-black">Can add/edit roles</p>
            <p className="text-[#909dad]">Can create job postings and manage new hires</p>
          </div>
        </div>
        <div className="flex items-center gap-3 py-4 border-b-1 border-[#eaecf0]">
          <ToggleButton />
          <div className="flex flex-col text-sm">
            <p className="text-[#091e42] font-black">Access to new hires</p>
            <p className="text-[#909dad]">Can create job posting and manage new hires</p>
          </div>
        </div>
        <div className="flex items-center gap-3 py-4 border-b-1 border-[#eaecf0]">
          <ToggleButton />
          <div className="flex flex-col text-sm">
            <p className="text-[#091e42] font-black">Access to Settings</p>
            <p className="text-[#909dad]">Employees in this role can edit company info and password</p>
          </div>
        </div>
        <div className="flex items-center gap-3 py-4 border-b-1 border-[#eaecf0]">
          <ToggleButton />
          <div className="flex flex-col text-sm">
            <p className="text-[#091e42] font-black">Access to dashboard data and reports</p>
            <p className="text-[#909dad]">This allows access generate reports and modify</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Permission;
