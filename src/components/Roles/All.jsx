import React from "react";
import { roles } from "../../assets/requestArray";
import employeeAvatar from "../../assets/employee-avatar.png";
import arrowRightSvg from '../../assets/arrow-right.svg'
import { Link } from "react-router-dom";

const All = () => {
  return (
    <div className="flex flex-wrap gap-[1.88rem]">
      {roles.map((role) => (
        <div
          key={role.id}
          className=" px-[1.5rem] py-[1.41rem] border border-[#EFF1F4] rounded-[0.9375rem]"
        >
          <div className="flex justify-between items-center">
            <p className="text-[#091e42] text-lg font-black ">{role.role}</p>
            <div>{/* of the people */}</div>
          </div>
          <p className="pt-3 text-sm font-medium text-[#667085] w-[29.0625rem]">
            {role.desc}
          </p>
          <div className="flex gap-3 items-center py-4">
            {role.teams.map((r, index) => (
              <p
                className={`text-xs font-medium py-[0.125rem] px-2 rounded-2xl  ${
                  index % 2 === 0
                    ? "bg-[#f7e8ef] text-[#6a1039]"
                    : "bg-[#f5f6f7] text-[#091e42] "
                }`}
              >
                {r}
              </p>
            ))}
          </div>

          {/* manager */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img className="w-[2.125rem] h-[2.125rem] rounded-full"  src={employeeAvatar} alt="" />
              <div className="flex flex-col text-sm mr-8">
                <p className=" text-[#0e2354]">James campion</p>
                <p className="text-[#909dad]">Manager</p>
              </div>
            </div>
            <Link to={`/roles/${role.id}`} className="cursor-pointer">
                <img className="w-8 h-8" src={arrowRightSvg} alt="" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default All;
