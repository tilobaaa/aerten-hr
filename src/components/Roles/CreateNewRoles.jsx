import React, { useState } from "react";
import SideBar from "../SideBar";
import searchSvg from "../../assets/search.svg";
import settingsSvg from "../../assets/settings.svg";
import profileSvg from "../../assets/profile-pic.svg";
import bellSvg from "../../assets/bell.svg";
import leftArrow from "../../assets/arrow-left.svg";
import checkSvg from "../../assets/checked.svg";
import { Link, useNavigate } from "react-router-dom";
import BasicDetails from "./BasicDetails";
import SetPermissions from "./SetPermissions";
import ReviewDetails from "./ReviewDetails";

import { useEmployees } from "../../EmployeesContext";

const CreateNewRoles = () => {
  const [step, setStep] = useState(1);
  const { selectedEmployees, setSelectedEmployees } = useEmployees();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: "",
    desc: "",
    salary: "",
    jobType: "",
    benefit: "",
    teams: selectedEmployees,
    accessLevel: "",
  });

  const moveToNextStep = () => {
    if (step < 3) {
      setStep((prev) => prev + 1);
    } else if (step === 3) {
      navigate("/roles");
    }
  };

  return (
    <div>
      <SideBar />
      <main className="ml-56  py-4">
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

        {/* rest of the docs */}
        <div className="px-8 py-[2.38rem]">
          <Link
            to={"/roles"}
            className="flex gap-[0.17rem] items-center cursor-pointer"
          >
            <img className="w-4 h-4" src={leftArrow} alt="" />
            <p className="text-[#81899e] text-[1rem] tracking-tight ">Roles</p>
          </Link>

          <h4 className="text-[#101828] text-2xl font-semibold mb-[1.69rem]">
            Create New Roles
          </h4>
          <div className="flex justify-between items-center">
            <div className="flex gap-[2.62rem] items-center">
              <div className="flex gap-3 items-center">
                {step === 1 ? (
                  <img
                    className="w-[1.625rem] h-[1.625rem] "
                    src={checkSvg}
                    alt=""
                  />
                ) : (
                  <div className="w-[1.625rem] h-[1.625rem] rounded-full border border-[#cdd0d8] flex items-center justify-center ">
                    {" "}
                    <p className="text-sm text-[#9AA1B1]">1</p>
                  </div>
                )}
                <p
                  className={`${
                    step === 1
                      ? "text-[#6a1039] font-semibold"
                      : "text-[#505f79]"
                  } text-xs `}
                >
                  Basic Info
                </p>
              </div>
              <div className="flex gap-3 items-center">
                {step === 2 ? (
                  <img
                    className="w-[1.625rem] h-[1.625rem] "
                    src={checkSvg}
                    alt=""
                  />
                ) : (
                  <div className="w-[1.625rem] h-[1.625rem] rounded-full border border-[#cdd0d8] flex items-center justify-center ">
                    {" "}
                    <p className="text-sm text-[#9AA1B1]">2</p>
                  </div>
                )}
                <p
                  className={`${
                    step === 2
                      ? "text-[#6a1039] font-semibold"
                      : "text-[#505f79]"
                  } text-xs `}
                >
                  Set Permissions
                </p>
              </div>
              <div className="flex gap-3 items-center">
                {step === 3 ? (
                  <img
                    className="w-[1.625rem] h-[1.625rem] "
                    src={checkSvg}
                    alt=""
                  />
                ) : (
                  <div className="w-[1.625rem] h-[1.625rem] rounded-full border border-[#cdd0d8] flex items-center justify-center ">
                    {" "}
                    <p className="text-sm text-[#9AA1B1]">3</p>
                  </div>
                )}
                <p
                  className={`${
                    step === 3
                      ? "text-[#6a1039] font-semibold"
                      : "text-[#505f79]"
                  } text-xs `}
                >
                  Review Details
                </p>
              </div>
            </div>

            <div className="flex items-center gap-[1.38rem] my-8">
              <button
                onClick={() => navigate("/roles")}
                className="px-4 py-[0.625rem] border border-[#e6e7ec] text-sm text-[#0e2354] cursor-pointer rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={moveToNextStep}
                className="px-4 py-[0.625rem]  text-sm  rounded-lg bg-[#6a1039] text-white cursor-pointer "
              >
                {step === 3 ? "Create Role" : "Continue"}
              </button>
            </div>
          </div>
          {step === 1 && (
            <BasicDetails
              formData={formData}
              setFormData={setFormData}
              selectedEmployees={selectedEmployees}
              setSelectedEmployees={setSelectedEmployees}
            />
          )}
          {step === 2 && <SetPermissions />}
          {step === 3 && <ReviewDetails formData={formData} />}
        </div>
      </main>
    </div>
  );
};

export default CreateNewRoles;
