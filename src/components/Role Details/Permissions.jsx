import React from "react";
import editSvg from '../../assets/edit-2.svg'
import ToggleButton from "../utilities/ToggleButton";

const Permissions = () => {
  return (
    <div className="basis-1/2 border-1 border-[#dff2e6] px-[2.44rem] py-[1.96rem] rounded-[0.9375rem]">
      <div className="pb-8 mb-8 border-b-1 border-[#eaecf0] flex justify-between">
        <p className="text-[#091e42] text-xl font-black">Role Permissions</p>
        <img
          className="w-6 h-6 rounded-full cursor-pointer"
          src={editSvg}
          alt=""
        />
      </div>

      <div>
        <div>
            
        </div>
        <ToggleButton/>
      </div>
    </div>
  );
};

export default Permissions;
