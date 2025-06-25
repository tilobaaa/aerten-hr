import React from "react";
import bellSvg from "../assets/bell.svg";
import searchSvg from "../assets/search.svg";
import settingsSvg from "../assets/settings.svg";
import arrowDowmSvg from "../assets/arrow-down.svg";
import shareSvg from "../assets/share-icon.svg";
import profileSvg from '../assets/profile-pic.svg'

const Header = () => {
  return (
    <div className="flex gap-4 items-center justify-between border-b border-gray-300 px-8 pb-2">
      <div className=" relative w-156">
        <img
          className="absolute w-6 h-6 top-1/2 -translate-y-1/2 left-2"
          src={shareSvg}
          alt=""
        />
        <input
          className="w-full px-4 py-2 text-sm pl-10 focus:outline-none"
          type="text"
          placeholder="Share announcements"
        />
      </div>
      {/* nav icons */}
      <div className="flex gap-6">
        <img
          className="cursor-pointer hover:translate-y-[-4px] transition-all duration-300"
          src={bellSvg}
          alt=""
        />
        <img
          className="cursor-pointer hover:translate-y-[-4px] transition-all duration-300"
          src={searchSvg}
          alt=""
        />
        <img
          className="cursor-pointer hover:translate-y-[-4px] transition-all duration-300"
          src={settingsSvg}
          alt=""
        />
      </div>
      {/* profile details */}
      <div className="flex gap-4 items-center">
        <img className="h-10 w-10 rounded-full" src={profileSvg} alt="" />
        <div className="leading-tight">
          <p className="text-lg text-black">James Omah</p>
          <p className="text-sm text-[#B3B3B3]">Tassyjames@gmail.com</p>
        </div>
        <img className="cursor-pointer" src={arrowDowmSvg} alt="" />
      </div>
    </div>
  );
};

export default Header;
