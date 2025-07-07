import React from "react";
import helpSvg from "../../assets/help-circle.svg";

const Permissions = () => {
  return (
    <div className="py-[2.37rem] px-[1.88rem]">
      <div className="flex flex-col gap-3">
        <div className="flex items-start w-fit">
          <p className="text-[#0e2354] text-lg font-semibold">Owner (Admin)</p>
          <div className="relative group">
            <img className="w-4 h-4 rounded-full cursor-pointer " src={helpSvg} alt="" />
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
    </div>
  );
};

export default Permissions;
