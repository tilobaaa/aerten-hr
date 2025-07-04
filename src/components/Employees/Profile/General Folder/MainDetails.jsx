import React from "react";
import { useParams } from "react-router-dom";
import avatarPng from "../../../../assets/employee-avatar.png";
import { employees } from "../../../../assets/requestArray";

const MainDetails = () => {
  const { id } = useParams();
  const employee = employees.find((employee) => employee.id === id);

  return (
    <div className="flex-1 p-4 border-1 rounded-[0.625rem] border-[#eff1f4]">
      <div className="flex gap-[1.12rem]  ">
        <img className="w-15 h-15 rounded-[25rem] " src={avatarPng} alt="" />

        <div>
          <h6 className="text-[#101828] text-[1rem] font-semibold">
            {employee.name}
          </h6>
          <p className="text-[#6b788e] text-sm ">{employee.email}</p>
          <p
            className={`w-fit text-xs font-medium flex gap-[0.375rem] py-[0.125rem] px-2 ${
              employee.status === "Active"
                ? "text-[#027a48] bg-[#ecfdf3] "
                : "text-[#f15046] bg-[#fff2ea] "
            }`}
          >
            {employee.status}
          </p>
        </div>
      </div>
      {/* projects */}
      <div className=" flex justify-between py-[1.69rem] text-center">
        <div className="flex flex-col items-center ">
          <p className="text-lg text-[#091e42] font-bold">15</p>
          <p className="text-[#8993a4] text-xs font-semibold tracking-wide">
            Projects
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <p className="text-lg text-[#091e42] font-bold">124</p>
          <p className="text-[#8993a4] text-xs font-semibold tracking-wide">
            Tasks completed
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <p className="text-lg text-[#091e42] font-bold">12</p>
          <p className="text-[#8993a4] text-xs font-semibold tracking-wide">
            Tasks pending
          </p>
        </div>
      </div>
      {/* contact and roles */}
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-sm text-[#47586e] font-semibold">Email:</p>
          <p className="text-[1rem] text-[#091e42] ">{employee.email}</p>
        </div>
        <div>
          <p className="text-sm text-[#47586e] font-semibold">Role:</p>
          <p className="text-[1rem] text-[#091e42] ">{`${employee.role}, ${employee.jobTypes}`}</p>
        </div>
        <div>
          <p className="text-sm text-[#47586e] font-semibold">Phone:</p>
          <p className="text-[1rem] text-[#091e42] ">0 9023 456 789</p>
        </div>
        <div>
          <p className="text-sm text-[#47586e] font-semibold">Social Handle:</p>
          <p className="text-[1rem] text-[#091e42] ">{`@${employee.name}`}</p>
        </div>
        <div>
          <p className="text-sm text-[#47586e] font-semibold">Work Location:</p>
          <p className="text-[1rem] text-[#091e42] ">New York, NY</p>
        </div>
        <div>
          <p className="text-sm text-[#47586e] font-semibold">Join Date:</p>
          <p className="text-[1rem] text-[#091e42] ">12 April, 2022</p>
        </div>
        <div>
          <p className="text-sm text-[#47586e] font-semibold">Date of Birth:</p>
          <p className="text-[1rem] text-[#091e42] ">12 April</p>
        </div>
      </div>
    </div>
  );
};

export default MainDetails;
