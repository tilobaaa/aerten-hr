import React from "react";
import employeeAvatar from "../../assets/employee-avatar.png";
import Permission from "../Role Details/Permission";
import { useEmployees } from "../../EmployeesContext";


const ReviewDetails = ({ formData }) => {
  const { selectedEmployees } = useEmployees();

  const generateRandomRoleId = () => {
    const randomNum = Math.floor(100 + Math.random() * 900); // 100–999
    return `#EMP${randomNum}`;
  };

  console.log(formData.teams);

  return (
    <div className="p-8 border border-[#eff1f4] rounded-[0.625rem] relative">
      <div className="flex justify-between items-center border-b border-[#eff1f4] pb-8">
        <div className="flex flex-col gap-3">
          <h6 className="text-[#0e2354] text-lg font-semibold ">
            Review Role Information
          </h6>
          <p className="text-[#676e7e] text-sm ">
            Do a final check to make sure there are no mistakes
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

      <div className="my-8 p-8 grid grid-cols-2 gap-[0.68rem]">
        {/* roles */}
        <div className="py-4">
          <div className="pb-4 border-b border-[#eaecf0] ">
            <h6 className="mb-4 text-[#091e42] text-lg font-black">
              {formData.role}
            </h6>
            <p className="text-sm  text-[#667085] font-medium">
              <span className="text-[#091e42] font-black">
                Role Description:{" "}
              </span>
              {formData.desc}
            </p>
          </div>

          <div className="pt-[1.06rem]  border-b-1 border-[#eaecf0] flex flex-wrap ">
            <div className="basis-1/2 flex flex-col font-medium mb-[1.69rem]">
              <p className="text-sm  text-[#47586e] w-fit">Role ID:</p>
              <p className="text-[1rem] text-[#091e42] w-fit">
                {generateRandomRoleId()}
              </p>
            </div>
            <div className="basis-1/2 flex flex-col font-medium mb-[1.69rem] ">
              <p className="text-sm  text-[#47586e]">Salary:</p>
              <p className="text-[1rem] text-[#091e42] ">{`$${formData.salary}/year`}</p>
            </div>
            <div className="basis-1/2 flex flex-col font-medium mb-[1.69rem]">
              <p className="text-sm  text-[#47586e]">Access Level:</p>
              <p className="text-[1rem] text-[#091e42] ">
                {formData.accessLevel}
              </p>
            </div>
            <div className="basis-1/2 flex flex-col font-medium mb-[1.69rem]">
              <p className="text-sm  text-[#47586e]">Benefits:</p>
              <p className="text-[1rem] text-[#091e42] ">{formData.benefit}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-[#47586e] py-4">Teams:</p>
            <div className="flex gap-3 text-xs font-medium">
              {selectedEmployees.map((team, index) => (
                <p
                  key={index}
                  className={`py-[0.125rem] px-2 rounded-2xl ${
                    index % 2 === 0
                      ? "bg-[#f7e8ef] text-[#6a1039]"
                      : "text-[#091e42] bg-[#f5f6f7]"
                  }`}
                >
                  {team.name}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 border-b-1 border-[#eaecf0] my-12">
            <div className="flex gap-3 items-center pb-[0.87rem]  ">
              <img
                className="w-8 h-8 rounded-full "
                src={employeeAvatar}
                alt=""
              />
              <div className="flex flex-col text-sm">
                <p className="text-[#344054] font-black">Tassy Omah</p>
                <p className="text-[#667085]">Developer Relations, Payments</p>
              </div>
            </div>
            <div className="flex gap-3 items-center pb-[0.87rem]  ">
              <img
                className="w-8 h-8 rounded-full "
                src={employeeAvatar}
                alt=""
              />
              <div className="flex flex-col text-sm">
                <p className="text-[#344054] font-black">Tassy Omah</p>
                <p className="text-[#667085]">Developer Relations, Payments</p>
              </div>
            </div>
            <div className="flex gap-3 items-center pb-[0.87rem]  ">
              <img
                className="w-8 h-8 rounded-full "
                src={employeeAvatar}
                alt=""
              />
              <div className="flex flex-col text-sm">
                <p className="text-[#344054] font-black">Tassy Omah</p>
                <p className="text-[#667085]">Developer Relations, Payments</p>
              </div>
            </div>
          </div>
        </div>

        {/* second grid */}
        <Permission />
      </div>
    
    </div>
  );
};

export default ReviewDetails;
