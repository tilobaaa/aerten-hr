import React from "react";
import plusSvg from "../../../assets/plus.svg";
import employeePic from "../../../assets/employee-avatar.png";
import ToggleButton from "../../utilities/ToggleButton";

const TabularCustomPermissions = ({ selectedEmployees }) => {
  return (
    <div className="-mx-8">
      <div className="flex justify-between items-center mx-8">
        <p className="text-sm font-medium text-[#47586e] ">
          Set Permissions for these selected individuals.
        </p>
        <button className="px-4 py-[0.62rem] flex gap-2 border border-[#e6e7ec] rounded-[1.8125rem] ">
          <img className="w-4 h-4" src={plusSvg} alt="" />
          <p className="text-sm text-[#0e2354]">Add</p>
        </button>
      </div>

      <table className="w-full mt-[2.69rem]">
        <colgroup>
          <col className="w-3/9" />
          <col className="w-1/9" />
          <col className="w-1/9" />
          <col className="w-1/9" />
          <col className="w-1/9" />
          <col className="w-1/9" />
          <col className="w-1/9" />
        </colgroup>
        <thead className="bg-[#fafbfb] border-b border-[#eaecf0]">
          <tr>
            <th className="px-6 py-3 text-xs font-medium text-[#42526d]">
              Selected
            </th>
            <th className=" py-3 text-xs font-medium text-[#42526d] ">
              Admin Access
            </th>
            <th className=" py-3 text-xs font-medium text-[#42526d]">
              Manager Access
            </th>
            <th className=" py-3 text-xs font-medium text-[#42526d]">
              Employee Access
            </th>
            <th className=" py-3 text-xs font-medium text-[#42526d]">
              Limited Access
            </th>
            <th className=" py-3 text-xs font-medium text-[#42526d]">
              Guest Access
            </th>
            <th className=" py-3 text-xs font-medium text-[#42526d]">
              Remote access
            </th>
          </tr>
        </thead>
        <tbody>
          {selectedEmployees.map((emp) => (
            <tr key={emp.id} >
              <td className="flex items-center gap-3 px-6 py-4 border-b border-[#eaecf0]">
                <div className="cursor-pointer text-xs border p-1 w-5 h-5 border-[#d0d5dd]  rounded-md flex items-center justify-center">
                  {" "}
                  <p>x</p>
                </div>

                <img className="rounded-[12.5rem] w-10 h-10 " src={employeePic} alt="" />
                <div className="flex flex-col text-sm">
                  <p className="text-[#101828] font-medium">{emp.name}</p>
                  <p className="text-[#6b788e]">{`@${emp.email}`}</p>
                </div>
              </td>
              <td className="px-6 py-4 border-b border-[#eaecf0]">
                <ToggleButton />
              </td>
              <td className="px-6 py-4 border-b border-[#eaecf0]">
                <ToggleButton />
              </td>
              <td className="px-6 py-4 border-b border-[#eaecf0]">
                <ToggleButton />
              </td>
              <td className="px-6 py-4 border-b border-[#eaecf0]">
                <ToggleButton />
              </td>
              <td className="px-6 py-4 border-b border-[#eaecf0]">
                <ToggleButton />
              </td>
              <td className="px-6 py-4 border-b border-[#eaecf0]">
                <ToggleButton />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabularCustomPermissions;
