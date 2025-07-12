import React from "react";
import employeeAvatar from "../../assets/employee-avatar.png";
import EmployeeAceess from "./Permissions Folder/EmployeeAceess";

const SetPermissions = () => {
  return (
    <div className="m-8">
      <div className="flex justify-between items-center border-b border-[#eff1f4] pb-8">
        <div className="flex flex-col gap-3">
          <h6 className="text-[#0e2354] text-lg font-semibold ">
            Set Permissions
          </h6>
          <p className="text-[#676e7e] text-sm ">
            Modify what Individuals on this role can do
          </p>
        </div>

        <div className="flex items-center gap-2">
          <img
            className="w-[2.125rem] h-[2.125rem] rounded-[12.5rem]"
            src={employeeAvatar}
            alt=""
          />
          <div className="flex flex-col text-sm">
            <p className="text-[#0e2354]">James campion</p>
            <p className="text-[#909dad]">Reporting manager</p>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-6">
        <EmployeeAceess />
        <EmployeeAceess title={'Limited or Guest Access'}/>
        <EmployeeAceess title={'Admin Access'}/>
        <EmployeeAceess title={'Manager Access'}/>
      </div>
    </div>
  );
};

export default SetPermissions;
