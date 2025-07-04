import React from "react";
import { employees } from "../../../../assets/requestArray";
import { useParams } from "react-router-dom";
import arrowRightSvg from "../../../../assets/arrow-right.svg";
import employeeAvatarPng from "../../../../assets/employee-avatar.png";

const OtherDetails = () => {
  const { id } = useParams();
  const employee = employees.find((employee) => employee.id === id);
  //   const relatedEmployees = employees.filter(colleague => colleague.role === employee.role && colleague.id !== id);
  //   console.log(relatedEmployees)

  return (
    <div className="flex-1 flex flex-col gap-[0.94rem]">
      {/* upper box */}
      <div className="p-4 border-1 rounded-[0.625rem] border-[#eff1f4]">
        <p className="text-[#243757] text-lg font-black mb-4">Other details</p>
        <div className="flex flex-col gap-1 mb-[1.69rem]">
          <p className="text-sm text-[#47586e] font-medium">2016 - 2021, BSC</p>
          <p className="text-[1rem] text-[#091e42]">Design Communication visuals</p>
          <p className="text-[#b2bbc6] text-sm font-medium">Jember University</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">Gender</p>
          <p className="text-[#091e42] text-[1rem]">Female</p>
        </div>
      </div>

      {/* lower box */}
      <div className="p-4 border-1 rounded-[0.625rem] border-[#eff1f4]">
        <div className="border-b-1 border-[#f5f6f7]">
          <p className="text-sm text-[#47586e]">Teams:</p>
          <div className="flex gap-1 py-4 ">
            {employee.teams.map((team, index) => (
              <p
                key={index}
                className={
                  index % 2 === 0
                    ? "w-fit text-xs font-medium text-[#091e42] px-2 py-[0.125rem] bg-[#f5f6f7] rounded-2xl"
                    : "w-fit text-xs font-medium text-[#6a1039] px-2 py-[0.125rem] bg-[#f7e8ef] rounded-2xl"
                }
              >
                {team}
              </p>
            ))}
          </div>
        </div>
        {/* team members */}
        <div className="py-[1.75rem]">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-[#47586e]">Team Members:</p>
            <button className="cursor-pointer flex items-center">
              <p className="text-sm text-[#81899e] tracking-tight">View all</p>
              <img className="w-4 h-4" src={arrowRightSvg} alt="" />
            </button>
          </div>

          <div className="my-6">
            <div className="flex items-center gap-1 p-4 border-b-1 rounded-[0.625rem] border-[#eff1f4]">
                <img className="w-8 h-8 rounded-full" src={employeeAvatarPng} alt="" />
                <div className="flex flex-col text-sm">
                    <p className="font-black text-[#344054]">Tassy Omah</p>
                    <p className="text-[#667085] font-normal">Developer Relations, Payments</p>
                </div>
            </div>
            <div className="flex items-center gap-1 p-4 border-b-1 rounded-[0.625rem] border-[#eff1f4]">
                <img className="w-8 h-8 rounded-full" src={employeeAvatarPng} alt="" />
                <div className="flex flex-col text-sm">
                    <p className="font-black text-[#344054]">Tassy Omah</p>
                    <p className="text-[#667085] font-normal">Developer Relations, Payments</p>
                </div>
            </div>
            <div className="flex items-center gap-1 p-4 border-b-1 rounded-[0.625rem] border-[#eff1f4]">
                <img className="w-8 h-8 rounded-full" src={employeeAvatarPng} alt="" />
                <div className="flex flex-col text-sm">
                    <p className="font-black text-[#344054]">Tassy Omah</p>
                    <p className="text-[#667085] font-normal">Developer Relations, Payments</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
