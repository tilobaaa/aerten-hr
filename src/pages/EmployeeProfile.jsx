import React from "react";
import { employees } from "../assets/requestArray";
import { useParams } from "react-router-dom";
import arrowBackSvg from "../assets/arrow-back.svg";
import { Link } from "react-router-dom";
import editSvg from '../assets/edit-2.svg'
import helpSvg from '../assets/help-circle.svg';
import moreVerticalSvg from '../assets/more-horizontal.svg'

const EmployeeProfile = () => {
  const { id } = useParams();
  const employee = employees.find((employee) => employee.id === id);
  console.log(employee);

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
          <h4 className="text-2xl text-[#101828] font-semibold">{employee.name}</h4>
          <p className="px-[0.38rem] text-xs font-medium text-[#7a8699] rounded-2xl bg-[#f5f6f7]">#Employee ID: <span className="text-[#091E42] ">{employee.id}</span></p>
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
    </div>
  );
};

export default EmployeeProfile;
