import React, { useState } from "react";
import { Link } from "react-router-dom";
import briefcaseSvg from "../../assets/briefcase.svg";
import employeePng from "../../assets/employee-avatar.png";
import searchSvg from "../../assets/search.svg";
import helpCircleSvg from "../../assets/help-circle.svg";
import plusSvg from "../../assets/plus.svg";
import closeSvg from "../../assets/close.svg";
import { useNavigate } from "react-router-dom";

const Assign = ({
  selectedEmployee,
  setIsConfirmed,
  onRemove,
  onRemoveRole,
  searchEmployeeQuery,
  setSearchEmployeeQuery,
  searchRoleQuery,
  setSearchRoleQuery,
  filteredEmployeeResults,
  filteredRolesSelected,
  handleSelect,
  roleSelected,
  handleRolesSelected,
  setSelectedEmployee,
  setRoleSelected,
}) => {
  const [setValue, setSetValue] = useState(1);

  const navigate = useNavigate();

  const set1 = (
    <div className="z-50 bg-white rounded-xl w-[32.875rem] h-[28.937rem] p-10 pb-[3.875rem] flex flex-col gap-[1.88rem] relative">
      <div
        onClick={() => {
          setIsConfirmed(false);
        }}
        className="absolute -top-10 right-0 cursor-pointer"
      >
        <img src={closeSvg} alt="" />
      </div>
      <div className="w-fit pt-[0.625rem] px-3 pb-[0.875rem] bg-[#ffe6ef] rounded-[1.75rem]">
        <img className="w-6 h-6 " src={briefcaseSvg} alt="" />
      </div>
      <div>
        <h5 className="text-[#15294b] text-xl font-semibold">Assign a role</h5>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <div className="relative">
            <img
              className="absolute w-5 h-5 -translate-y-1/2 top-1/2"
              src={searchSvg}
              alt=""
            />
            <input
              className="text-[#5d6b82] text-sm pl-6 focus:outline-none w-full"
              type="text"
              placeholder="Search for existing roles"
              value={searchRoleQuery}
              onChange={(e) => setSearchRoleQuery(e.target.value)}
            />
            <img
              className="absolute w-5 h-5 -translate-y-1/2 top-1/2 right-2"
              src={helpCircleSvg}
              alt=""
            />
          </div>

          {searchRoleQuery && (
            <ul className="absolute bg-white shadow-md rounded mt-10 z-10 w-fit max-h-40 overflow-y-auto">
              {filteredRolesSelected.map((role, index) => (
                <li
                  key={index}
                  onClick={() => handleRolesSelected(role)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <strong>{role}</strong>
                </li>
              ))}
              {filteredRolesSelected.length === 0 && (
                <li className="px-4 py-2 text-gray-500">No matches found</li>
              )}
            </ul>
          )}
          <div className="flex flex-wrap gap-2 py-3">
            {roleSelected.map((role, index) => (
              <div
                className="flex items-center gap-1 text-[#091e42] rounded-2xl py-[0.125rem] px-2 bg-[#f5f6f7]"
                key={index}
              >
                <p className="text-sm">{role}</p>
                <p
                  onClick={() => onRemoveRole(role)}
                  className="text-xs cursor-pointer"
                >
                  x
                </p>
              </div>
            ))}
          </div>
        </div>

        <Link
          to={"/roles/new"}
          className="px-4 py-[0.62rem] flex items-center gap-2 border border-[#e6e7ec] rounded-[1.8125rem] cursor-pointer w-fit"
        >
          <img className="w-4 h-4" src={plusSvg} alt="" />
          <p className="text-[#0e2354] text-sm">Create new role</p>
          <img className="w-4 h-4" src={helpCircleSvg} alt="" />
        </Link>
      </div>

      <button
        disabled={roleSelected.length === 0}
        onClick={() => {
          setSetValue(2);
        }}
        className={`rounded-lg border border-[#6a1039] bg-[#6a1039] w-full shadow-sm py-[0.625rem] text-sm font-semibold text-white cursor-pointer disabled:cursor-not-allowed `}
      >
        Continue
      </button>
    </div>
  );

  const set2 = (
    <div className="z-50 bg-white rounded-xl w-[32.875rem] h-4/5 p-10 pb-[3.875rem] flex flex-col gap-[1.88rem] relative">
      <div
        onClick={() => {
          setIsConfirmed(false);
        }}
        className="absolute -top-10 right-0 cursor-pointer"
      >
        <img src={closeSvg} alt="" />
      </div>

      <div className="w-fit pt-[0.625rem] px-3 pb-[0.875rem] bg-[#ffe6ef] rounded-[1.75rem]">
        <img className="w-6 h-6 " src={briefcaseSvg} alt="" />
      </div>

      <div>
        <h5 className="text-[#15294b] text-xl font-semibold">
          Assign this role
        </h5>
        <p className="text-sm text-[#667085] ">Select one or multiple employees to assign to this role “<span className="text-[#6a1039] font-bold">{roleSelected}</span> “</p>
      </div>
      <div className=" w-full">
        <div className="my-[1.44rem]">
          {selectedEmployee.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center">
              {selectedEmployee.map((emp) => (
                <div
                  className="flex gap-1 py-[0.125rem] px-2 rounded-2xl bg-[#f5f6f7]"
                  key={emp.id}
                >
                  <img
                    className="w-[1.125rem] h-[1.125rem] rounded-[12.5rem]"
                    src={employeePng}
                    alt=""
                  />
                  <p className="text-[#091e42] text-sm font-medium">
                    {emp.name}
                  </p>
                  <p
                    onClick={() => onRemove(emp)}
                    className="text-xs cursor-pointer"
                  >
                    x
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <img
            className="absolute w-5 h-5 -translate-y-1/2 top-1/2"
            src={searchSvg}
            alt=""
          />
          <input
            className="text-[#5d6b82] text-sm pl-6 focus:outline-none w-full"
            type="text"
            placeholder="Search for an indivdual or team"
            value={searchEmployeeQuery}
            onChange={(e) => setSearchEmployeeQuery(e.target.value)}
          />
          <img
            className="absolute w-5 h-5 -translate-y-1/2 top-1/2 right-2"
            src={helpCircleSvg}
            alt=""
          />

          {searchEmployeeQuery && (
            <ul className="absolute top-8 bg-white shadow-md w-full rounded  z-10  max-h-40 overflow-y-auto">
              {filteredEmployeeResults.map((emp) => (
                <li
                  key={emp.id}
                  onClick={() => handleSelect(emp)}
                  className="p-4 hover:bg-[#fff2ea] cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <img
                        className="w-8 h-8 rounded-[12.5rem] "
                        src={employeePng}
                        alt=""
                      />
                      <div className="flex flex-col gap-1 text-sm">
                        <p className="text-[#091e42] font-black">{emp.name}</p>
                        <p className="text-[#6a1039]">
                          {emp.role}, {emp.teams[0]}
                        </p>
                      </div>
                    </div>
                    
                  </div>
                </li>
              ))}
              {filteredEmployeeResults.length === 0 && (
                <li className="px-4 py-2 text-gray-500">No matches found</li>
              )}
            </ul>
          )}
        </div>
      </div>

      <button
      disabled={selectedEmployee.length === 0}
        onClick={() => {
          navigate("/roles");
          setIsConfirmed(false);
          setSelectedEmployee([]);
          setRoleSelected([]);
        }}
        className={`rounded-lg border border-[#6a1039] bg-[#6a1039] w-full shadow-sm py-[0.625rem] text-sm font-semibold text-white cursor-pointer disabled:cursor-not-allowed`}
      >
        Assign
      </button>
    </div>
  );

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div
        onClick={() => {
          setIsConfirmed(false);
        }}
        className="fixed -z-20 top-0 left-0 w-screen h-screen bg-[#344054ab]  "
      ></div>
      {setValue === 1 && set1}
      {setValue === 2 && set2}
    </div>
  );
};

export default Assign;
