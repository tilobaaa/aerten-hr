import React, { useState } from "react";
import searchSvg from "../../assets/search.svg";

const Inbox = () => {
  const [activeSearch, setActiveSearch] = useState("request");

  return (
    <div className="px-6 py-3 border-1 border-[#80808025] rounded-xl h-96">
      <div className="flex justify-between">
        <h5>Inbox</h5>
        <div className="relative w-72 border-1 border-[#80808025] rounded-xl">
          <img
            className="absolute w-6 h-6 left-2 top-1/2 -translate-y-1/2 "
            src={searchSvg}
            alt=""
          />
          <input
            className="text-sm py-2 pl-8 w-72 focus:outline-none"
            type="text"
            placeholder="Search by name, ID or Igama"
          />
        </div>
      </div>
      <div className="">
        <div className="flex text-sm border-b-1 border-b-[#F2F2F2]">
          <button
            onClick={() => {
              setActiveSearch("request");
            }}
            className={`flex items-center p-3 gap-2 cursor-pointer ${
              activeSearch === "request"
                ? "text-[#9A4C1E] border-b-1 border-b-[#9A4C1E] font-bold"
                : "text-[#808080]"
            }`}
          >
            <p>Requests</p>
            <p className="rounded-full bg-gray-100 p-2">0</p>
          </button>
          <button
            onClick={() => {
              setActiveSearch("profile");
            }}
            className={`flex items-center p-3 gap-2 cursor-pointer ${
              activeSearch === "profile"
                ? "text-[#9A4C1E] border-b-1 border-b-[#9A4C1E] font-bold"
                : "text-[#808080]"
            }`}
          >
            <p>Profile</p>
            <p className="rounded-full bg-gray-100 p-2">2</p>
          </button>
        </div>
        <div className=" flex items-center justify-center">
          {activeSearch === "request" && (
            <div className="flex flex-col items-center w-2/3 my-12 ">
              <img src="" alt="" className="w-15 h-15 rounded-full mb-4" />
              <p>Keep in sync with your accounting system</p>
              <p>
                Now! you can customize your journal voucher the way you want and
                get it ready to import to your accounting system
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
