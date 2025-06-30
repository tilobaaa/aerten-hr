import React, { useState } from "react";
import { employees } from "../../assets/requestArray";
import employeeAvatarPng from "../../assets/employee-avatar.png";
import greenDotSvg from '../../assets/green_dot.svg'
import redDotSvg from '../../assets/red_dot.svg'

const EmployeeList = () => {
  const [selectedIds, setSelectedIds] = useState([]);

  const isAllSelected = selectedIds.length === employees.length;

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(employees.map((emp) => emp.id));
    }
  };

  const toggleSelectOne = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds((prev) => prev.filter((i) => i !== id));
    } else {
      setSelectedIds((prev) => [...prev, id]);
    }
  };

  return (
    <table className="w-full text-left">
      <thead className="text-xs font-medium text-[#42526D] bg-[#FAFBFB]  border-b-1 border-[#EAECF0]">
        <tr>
          <th className="py-3 pl-6">
            <input
              className="border-1 border-[#D0D5DD] rounded-md bg-white w-5 h-5"
              type="checkbox"
              checked={isAllSelected}
              onChange={toggleSelectAll}
            />
          </th>
          <th>Name</th>
          <th>Employee ID</th>
          <th>Role</th>
          <th>Status</th>
          <th>Teams</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td className="py-4 px-6 flex items-center">
              <input
                className="border-1 border-[#D0D5DD] bg-white rounded-md "
                checked={selectedIds.includes(emp.id)}
                onChange={() => toggleSelectOne(emp.id)}
                type="checkbox"
              />
            </td>
            <td>
              <div className="flex gap-2">
                <img className="w-10 h-10" src={employeeAvatarPng} alt="" />
                <div className="flex flex-col text-sm ">
                  <p className="font-medium text-[#101828]">{emp.name}</p>
                  <p className="text-[#6B788E]">{emp.email}</p>
                </div>
              </div>
            </td>
            <td className="text-xs font-medium text-[#091E42]  ">
              <p className="w-fit rounded-md p-[0.125rem] bg-[#f5f6f7] ">
                {emp.email}
              </p>
            </td>
            <td>
              <div className="flex flex-col">
                <p className="text-sm text-[#42526d]">{emp.role}</p>
                <p className="text-xs text-[#8993a4]">{emp.jobTypes}</p>
              </div>
            </td>
            <td>
                <div className={`w-fit flex gap-1 rounded-2xl py-[0.125rem] px-2 ${emp.status === 'Active' ? "bg-[#ecfdf3]" : "bg-[#fff2ea]"}`}>
                    <img src={emp.status === 'Active' ? greenDotSvg: redDotSvg} alt="" />
                <p className={`text-xs ${emp.status === 'Active'? 'text-[#027a48]':'text-[#f15046]'}`}>{emp.status}</p>
                </div>
                </td>
            <td>{emp.teams.join(", ")}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
