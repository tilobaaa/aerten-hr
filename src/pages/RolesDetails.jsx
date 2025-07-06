import React from "react";
import SideBar from "../components/SideBar";
import { roles } from "../assets/requestArray";
import bellSvg from "../assets/bell.svg";
import searchSvg from "../assets/search.svg";
import settingsSvg from "../assets/settings.svg";
import profileSvg from "../assets/profile-pic.svg";
import helpCircleSvg from "../assets/help-circle.svg";
import editSvg from "../assets/edit-2.svg";
import leftArrow from "../assets/arrow-left.svg";
import { useParams, Link } from "react-router-dom";
import Details1 from "../components/Role Details/Details1";
import Permission from "../components/Role Details/Permission";

const RolesDetails = () => {
  const { id } = useParams();
  const fullRole = roles.find((role) => role.id === id);

  return (
    <div className="flex">
      <SideBar />
      <main className="ml-56 w-full py-4">
        <div className="flex gap-4 items-center justify-between border-b border-gray-300 px-8 pb-2 ">
          <div className=" relative w-156">
            <img
              className="absolute w-6 h-6 top-1/2 -translate-y-1/2 left-2"
              src={searchSvg}
              alt=""
            />
            <input
              className="w-full px-4 py-2 text-sm pl-10 focus:outline-none"
              type="text"
              placeholder="Search anything here"
            />
          </div>
          {/* nav icons */}
          <div className="flex gap-6">
            <img
              className="cursor-pointer hover:translate-y-[-4px] transition-all duration-300"
              src={settingsSvg}
              alt=""
            />
            <img
              className="cursor-pointer hover:translate-y-[-4px] transition-all duration-300"
              src={bellSvg}
              alt=""
            />
            {/* profile details */}
            <div>
              <img className="h-10 w-10 rounded-full" src={profileSvg} alt="" />
            </div>
          </div>
        </div>

        {/* rest of the page  */}
        <div className="px-8 py-[2.38rem]">
          <Link
            to={"/roles"}
            className="flex gap-[0.17rem] items-center cursor-pointer"
          >
            <img className="w-4 h-4" src={leftArrow} alt="" />
            <p className="text-[#81899e] text-[1rem] tracking-tight ">Roles</p>
          </Link>

          <div className="flex justify-between items-center my-6">
            <h4 className="text-2xl text-[#101828] font-semibold">
              {fullRole.role}
            </h4>
            <button className="px-4 py-[0.62rem] border-1 rounded-md border-[#e6e7ec] flex gap-2 items-center cursor-pointer">
              <img className="h-5 w-5" src={editSvg} alt="" />
              <p className="text-[#0e2354] text-sm ">{fullRole.role}</p>
              <img className="h-5 w-5" src={helpCircleSvg} alt="" />
            </button>
          </div>

          <div className="w-full flex gap-[1.88rem]">
            <Details1 />
            <Permission />
          </div>
        </div>
      </main>
    </div>
  );
};

export default RolesDetails;
