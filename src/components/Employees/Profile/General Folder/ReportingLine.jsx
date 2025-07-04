import React from "react";
import employeeAvatarPng from "../../../../assets/employee-avatar.png";
import arrowRightSvg from "../../../../assets/arrow-right.svg";
import helpSvg from "../../../../assets/help-circle.svg";

const ReportingLine = () => {
  return (
    <div className="flex-1">
      <div className="py-[1.57rem] px-[1.13rem] border-1 border-[#eff1f4] rounded-[0.625rem]">
        <p className="text-xs font-medium mb-[0.88rem]">Reports to:</p>

        <div className="flex gap-2 items-center px-4 py-[0.62rem] border-1 rounded-md border-[#f5f6f7]">
          <img
            className="w-[2.125rem] h-[2.125rem] rounded-full"
            src={employeeAvatarPng}
            alt=""
          />
          <div className="flex flex-col ">
            <p className="text-sm text-[#0e2354]">James campion</p>
            <p className="text-[1rem] text-[#909dad]">Engineering Lead</p>
          </div>
          <img className="w-4 h-4 " src={arrowRightSvg} alt="" />
        </div>

        <div className="flex flex-col gap-[0.94rem] my-6">
          <div className="flex gap-2 items-center px-4 py-[0.62rem] border-1 rounded-md border-[#f5f6f7]">
            <p>Access Role: Admin Access</p>
            <img src={helpSvg} alt="" />
          </div>

          <div className="flex gap-2 items-center px-4 py-[0.62rem] border-1 rounded-md border-[#f5f6f7]">
            <p>Access Role: Admin Access</p>
          </div>

          <div className="flex gap-2 items-center px-4 py-[0.62rem] border-1 rounded-md border-[#f5f6f7]">
            <p>Access Role: Admin Access</p>
          </div>
        </div>

        
      </div>

      {/* role and responsibility */}
      <div className="border-1 border-[#eff1f4] rounded-[0.625rem] pt-[1.57rem] pl-[1.38rem] pr-[0.87rem] mt-[1.13rem] mb-[2.69rem] ">
        <p className="text-[#243757] text-lg font-black h-[2.387rem">Role and Responsibilities</p>
        <p className="text-[#505f79] text-[1rem] mb-[4.84rem]" >
            Designing products, organizing team meeting, screening and hiring product designers of all levels
        </p>
      </div>
    </div>
  );
};

export default ReportingLine;
