import React, { useState } from "react";
import { employees } from "../assets/requestArray";
import { useParams } from "react-router-dom";
import arrowBackSvg from "../assets/arrow-back.svg";
import { Link } from "react-router-dom";
import editSvg from "../assets/edit-2.svg";
import helpSvg from "../assets/help-circle.svg";
import moreVerticalSvg from "../assets/more-horizontal.svg";
import General from "../components/Employees/Profile/General";

const EmployeeProfile = () => {
  const { id } = useParams();
  const employee = employees.find((employee) => employee.id === id);
  const [clickedOption, setClickedOption] = useState('general')

  return (
    <div className="my-[1.75rem] mx-[3.25rem] flex flex-col gap-6">
      <Link
        to={"/employees"}
        className="flex items-center gap-1 text-[1rem] text-[#81899e] -tracking-[0.025rem]"
      >
        <img className="w-4 h-4" src={arrowBackSvg} alt="" />
        <p>Employees</p>
      </Link>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[0.94rem]">
          <h4 className="text-2xl text-[#101828] font-semibold">
            {employee.name}
          </h4>
          <p className="px-[0.38rem] text-xs font-medium text-[#7a8699] rounded-2xl bg-[#f5f6f7]">
            #Employee ID: <span className="text-[#091E42] ">{employee.id}</span>
          </p>
        </div>
        <div className="flex items-center gap-[0.94rem]">
          <div className="flex items-center gap-2 px-4 py-[0.62rem] border-1 border-[#E6e7ec] rounded-md  ">
            <img className="w-4 h-4" src={editSvg} alt="" />
            <p>{employee.role}</p>
            <img src={helpSvg} alt="" />
          </div>
          <div className="w-10 h-10  border-1 rounded-md border-[#dfe2e6]  p-1">
            <img className="" src={moreVerticalSvg} alt="" />
          </div>
        </div>
      </div>

      {/* buttons */}
      <div className="flex items-center gap-6 border-b-1 border-[#eaecf0]">
        <button onClick={()=>{setClickedOption('general')}} className={`cursor-pointer text-sm font-medium pb-1 ${clickedOption === 'general' ? 'text-[#6a1039] border-b-1 border-[#6a1039]':'text-[#667085]' }`}>General Info</button>
        <button onClick={()=>{setClickedOption('documents')}} className={`cursor-pointer text-sm font-medium pb-1 ${clickedOption === 'documents' ? 'text-[#6a1039] border-b-1 border-[#6a1039]':'text-[#667085]' }`}>Documents</button>
        <button onClick={()=>{setClickedOption('reminders')}} className={`cursor-pointer text-sm font-medium pb-1 ${clickedOption === 'reminders' ? 'text-[#6a1039] border-b-1 border-[#6a1039]':'text-[#667085]' }`}>Reminders</button>
        <button onClick={()=>{setClickedOption('performance')}} className={`cursor-pointer text-sm font-medium pb-1 ${clickedOption === 'performance' ? 'text-[#6a1039] border-b-1 border-[#6a1039]':'text-[#667085]' }`}>Performance</button>
        <button onClick={()=>{setClickedOption('salary')}} className={`cursor-pointer text-sm font-medium pb-1 ${clickedOption === 'salary' ? 'text-[#6a1039] border-b-1 border-[#6a1039]':'text-[#667085]' }`}>Salary and benefits</button>
        <button onClick={()=>{setClickedOption('feedback')}} className={`cursor-pointer text-sm font-medium pb-1 ${clickedOption === 'feedback' ? 'text-[#6a1039] border-b-1 border-[#6a1039]':'text-[#667085]' }`}>Feedback</button>
      </div>

      {/* content */}
      <div>
        <General/>
      </div>
    </div>
  );
};

export default EmployeeProfile;
