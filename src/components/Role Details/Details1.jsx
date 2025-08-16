import React from "react";
import { useParams } from "react-router-dom";
import { roles } from "../../assets/requestArray";
import employeePng from "../../assets/employee-avatar.png";

const Details1 = () => {
  const { id } = useParams();
  const fullRole = roles.find((role) => role.id === id);

  return (
    <div className="basis-1/2 border-1 border-[#dff2e6] px-[2.44rem] py-[1.96rem] rounded-[0.9375rem]">
      {/* <div className="pb-8 mb-8  border-[#eaecf0] flex justify-between">
        <p className="text-[#091e42] text-xl font-black">Role Details</p>
        <div className="flex gap-2">
          <img
            className="w-[2.125rem] h-[2.125rem] rounded-full"
            src={employeePng}
            alt=""
          />
          <div className="flex flex-col text-sm">
            <p className="text-sm text-[#0e2354]">James campion</p>
            <p className="text-[#909dad]">Manager</p>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col pb-[1.19rem] border-b-1 border-[#eaecf0]">
        {/* <p className="text-[#091e42] text-lg font-black">{fullRole.role}</p> */}
        <p className="text-[#667085] text-sm font-medium">
          <span className="text-[#091e42] font-black"></span>
          {fullRole.desc}
        </p>
      </div>

      <div className="pt-[1.06rem]  border-b-1 border-[#eaecf0] flex flex-wrap ">
        <div className="basis-1/2 flex flex-col font-medium mb-[1.69rem]">
          <p className="text-sm  text-[#47586e] w-fit">Role ID:</p>
          <p className="text-[1rem] text-[#091e42] w-fit">{fullRole.id}</p>
        </div>
        <div className="basis-1/2 flex flex-col font-medium mb-[1.69rem] ">
          <p className="text-sm  text-[#47586e]">Salary:</p>
          <p className="text-[1rem] text-[#091e42] ">{fullRole.salary}</p>
        </div>
        <div className="basis-1/2 flex flex-col font-medium mb-[1.69rem]">
          <p className="text-sm  text-[#47586e]">Access Level:</p>
          <p className="text-[1rem] text-[#091e42] ">{fullRole.accessLevel}</p>
        </div>
        <div className="basis-1/2 flex flex-col font-medium mb-[1.69rem]">
          <p className="text-sm  text-[#47586e]">Benefits:</p>
          <p className="text-[1rem] text-[#091e42] ">{fullRole.benefits}</p>
        </div>
      </div>
      {/* teams */}
      <div className="my-6">
        <p>Teams:</p>
        <div className="flex gap-2 my-6">
            {fullRole.teams.map((team, index)=>(
                <p key={index} className={`text-xs px-2 py-[0.12rem] rounded-2xl ${index%2===0 ? "bg-[#f7e8ef] text-[#6a1039]":"text-[#091e42] bg-[#f5f6f7]"}`}>{team}</p>
            ))}
        </div>
        {/* team members */}
        <div className="flex flex-col gap-6 border-b-1 border-[#eaecf0]">
            <div className="flex gap-3 items-center pb-[0.87rem]  ">
                <img className="w-8 h-8 rounded-full " src={employeePng} alt="" />
                <div className="flex flex-col text-sm">
                    <p className="text-[#344054] font-black">Tassy Omah</p>
                    <p className="text-[#667085]">Developer Relations, Payments</p>
                </div>
            </div>
             {/* <div className="flex gap-3 items-center pb-[0.87rem]  ">
                <img className="w-8 h-8 rounded-full " src={employeePng} alt="" />
                <div className="flex flex-col text-sm">
                    <p className="text-[#344054] font-black">Tassy Omah</p>
                    <p className="text-[#667085]">Developer Relations, Payments</p>
                </div>
            </div>
             <div className="flex gap-3 items-center pb-[0.87rem]  ">
                <img className="w-8 h-8 rounded-full " src={employeePng} alt="" />
                <div className="flex flex-col text-sm">
                    <p className="text-[#344054] font-black">Tassy Omah</p>
                    <p className="text-[#667085]">Developer Relations, Payments</p>
                </div>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Details1;
