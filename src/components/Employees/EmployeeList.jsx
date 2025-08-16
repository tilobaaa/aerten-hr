import React, { useEffect, useRef, useState } from "react";
import { employees } from "../../assets/requestArray";
import employeeAvatarPng from "../../assets/employee-avatar.png";
import greenDotSvg from "../../assets/green_dot.svg";
import redDotSvg from "../../assets/red_dot.svg";
import verticalSvg from "../../assets/more-vertical.svg";
import userSvg from "../../assets/user.svg";
import usersSvg from "../../assets/users.svg";
import userPlusSvg from "../../assets/user-plus.svg";
import editSvg from "../../assets/edit-2.svg";
import { Pagination } from "../Pagination";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [selectedIds, setSelectedIds] = useState([]);

  const [activeDropdownId, setActiveDropdownId] = useState(null);

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

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(employees.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedEmployees = employees.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  //dropdown

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdownId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
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
          {paginatedEmployees.map((emp) => (
            <tr
              className="border-b-1 border-[#EFF1F4] rounded-xl relative"
              key={emp.id}
            >
              <td className="p-6 flex items-center ">
                <input
                  className="border-1 border-[#D0D5DD] bg-white rounded-md w-5 h-5"
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
                  {`#${emp.id}`}
                </p>
              </td>
              <td>
                <div className="flex flex-col">
                  <p className="text-sm text-[#42526d]">{emp.role}</p>
                  <p className="text-xs text-[#8993a4]">{emp.jobTypes}</p>
                </div>
              </td>
              <td>
                <div
                  className={`w-fit flex gap-1 rounded-2xl py-[0.125rem] px-2 ${
                    emp.status === "Active" ? "bg-[#ecfdf3]" : "bg-[#fff2ea]"
                  }`}
                >
                  <img
                    src={emp.status === "Active" ? greenDotSvg : redDotSvg}
                    alt=""
                  />
                  <p
                    className={`text-xs ${
                      emp.status === "Active"
                        ? "text-[#027a48]"
                        : "text-[#f15046]"
                    }`}
                  >
                    {emp.status}
                  </p>
                </div>
              </td>
              <td className="text-xs flex gap-1">
                <p className="text-[#091E42] rounded-2xl px-2 py-[0.125rem] bg-[#F5F6F7] w-fit">
                  {emp.teams[0]}
                </p>
                {emp.teams.length > 1 && (
                  <p className="text-[#6a1039] rounded-2xl px-2 py-[0.125rem] bg-[#F7E8EF] w-fit">
                    {emp.teams[1]}
                  </p>
                )}
                {emp.teams.length > 2 && (
                  <p className="text-[#344054] rounded-2xl px-2 py-[0.125rem] bg-[#F2F4F7] w-fit">{`+ ${
                    emp.teams.length - 2
                  }`}</p>
                )}
              </td>
              <td>
                <button className={`rounded-md ${activeDropdownId === emp.id && 'bg-[#eff1f4]'} `}>
                  <img
                    onClick={() => {
                      setActiveDropdownId(
                        activeDropdownId === emp.id ? null : emp.id
                      );
                    }}
                    className="cursor-pointer"
                    src={verticalSvg}
                    alt=""
                  />
                  {activeDropdownId === emp.id && (
                    <div
                      ref={dropdownRef}
                      className="flex flex-col absolute right-0 bg-[#ffffff] z-10 shadow-lg"
                    >
                      <Link to={`/employee/${emp.id}/profile`} className="flex gap-3 px-4 py-[0.62rem] border-b-1 border-[#5d6b8210] cursor-pointer hover:bg-gray-200">
                        <img className="w-4 h-4" src={userSvg} alt="" />
                        <p className="text-sm font-medium text-[#5d6b82]">
                          View Profile
                        </p>
                      </Link>
                      <div className="flex gap-3 px-4 py-[0.62rem] border-b-1 border-[#5d6b8210] cursor-pointer hover:bg-gray-200">
                        <img className="w-4 h-4" src={usersSvg} alt="" />
                        <p className="text-sm font-medium text-[#5d6b82]">
                          Add to team
                        </p>
                      </div>
                      <div className="flex gap-3 px-4 py-[0.62rem] border-b-1 border-[#5d6b8210] cursor-pointer hover:bg-gray-200">
                        <img className="w-4 h-4" src={editSvg} alt="" />
                        <p className="text-sm font-medium text-[#5d6b82]">
                          Edit employee
                        </p>
                      </div>
                      <div className="flex gap-3 px-4 py-[0.62rem] border-b-1 border-[#5d6b8234] cursor-pointer hover:bg-gray-200">
                        <img className="w-4 h-4" src={userPlusSvg} alt="" />
                        <p className="text-sm font-medium text-[#5d6b82]">
                          Assign a role
                        </p>
                      </div>
                    </div>
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination Controls */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
      />
    </div>
  );
};

export default EmployeeList;
