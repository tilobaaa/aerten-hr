import React, { useState } from "react";
import plusSvg from "../../assets/plus.svg";
import helpCirtcle from "../../assets/help-circle.svg";
import searchSvg from "../../assets/search.svg";
import employeePng from "../../assets/employee-avatar.png";
import { employees } from "../../assets/requestArray";

const BasicDetails = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  const filteredResults = employees.filter((emp) => {
    const query = searchQuery.toLowerCase();
    return (
      emp.name.toLowerCase().includes(query) ||
      emp.role.toLowerCase().includes(query) ||
      emp.teams.some((team) => team.toLowerCase().includes(query))
    );
  });

  const handleSelect = (emp) => {
    if (!selectedEmployees.find((e) => e.id === emp.id)) {
      setSelectedEmployees([...selectedEmployees, emp]);
    }
    setSearchQuery("");
  };

  const removeItem = (id) => {
    const allItems = [...selectedEmployees];
    const remainingItems = allItems.filter((item) => item.id !== id);
    setSelectedEmployees(remainingItems);
  };

  return (
    <div className="p-8 border border-[#eff1f4] rounded-[0.625rem] ">
      <div className="flex justify-between items-center ">
        <div className="flex flex-col gap-3">
          <h6 className="text-[#0e2354] text-lg font-semibold ">
            Basic Details
          </h6>
          <p className="text-[#676e7e] text-sm ">
            Add basic information about this role you’re creating
          </p>
        </div>
        <button className="border border-[#e6e7ec] rounded-[1.8125rem] flex items-center gap-2 py-[0.625rem] px-4 ">
          <img className="w-4 h-4" src={plusSvg} alt="" />
          <p className="text-[#0e2354] text-sm ">Reporting Manager</p>
          <img className="w-4 h-4" src={helpCirtcle} alt="" />
        </button>
      </div>
      <div className="border-b border-[#eff1f4] w-full my-8"></div>

      <form className="grid grid-cols-3 gap-[1.56rem] mb-8">
        <div className="grid grid-rows-4 gap-4 text-sm">
          <input
            className="px-[0.88rem] py-[0.62rem] border border-[#eff1f4] rounded-md text-[#5d6b82]"
            type="text"
            placeholder="Title/name"
          />
          <textarea
            className="px-[0.88rem] py-[0.62rem] border border-[#eff1f4] rounded-md text-[#5d6b82] row-span-3"
            placeholder=" Description or Purpose"
          />
        </div>
        <div className="grid grid-rows-4 gap-4 text-sm">
          <select
            className="px-[0.88rem] py-[0.62rem] border border-[#eff1f4] rounded-md text-[#5d6b82]"
            name="Access Level"
            id=""
          >
            <option className="text-[#5d6b82]" value="Public">
              Access Level
            </option>
          </select>
          <select
            className="px-[0.88rem] py-[0.62rem] border border-[#eff1f4] rounded-md text-[#5d6b82]"
            name="Access Level"
            id=""
          >
            <option className="text-[#5d6b82]" value="Public">
              Role type
            </option>
          </select>
          <select
            className="px-[0.88rem] py-[0.62rem] border border-[#eff1f4] rounded-md text-[#5d6b82]"
            name="Access Level"
            id=""
          >
            <option className="text-[#5d6b82]" value="Public">
              Salary and benefits
            </option>
          </select>
        </div>
      </form>

      <div className="p-8 border border-[#eff1f4] rounded-[0.625rem] w-[45rem]">
        <p className="text-[#0e2354] text-[1rem] font-medium">
          Assign this role
        </p>
        <div className="w-full border border-[#eff1f4] rounded-[0.25rem] my-4 p-4 relative">
          <input
            className="w-full text-sm text-[#676e7e] font-medium focus:outline-none pl-6"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            name=""
            id=""
            placeholder="Search existing teams or employees and press Enter to add them"
          />
          <img
            className="absolute top-1/2 -translate-y-1/2 w-[0.875rem] h-[0.875rem]"
            src={searchSvg}
            alt=""
          />
          {/* suggestions */}
          {searchQuery && (
            <ul className="absolute top-3 left-0 w-full bg-white shadow-md rounded mt-10 z-10 w max-h-40 overflow-y-auto">
              {filteredResults.map((emp) => (
                <li
                  key={emp.id}
                  onClick={() => handleSelect(emp)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  <strong>{emp.name}</strong> — {emp.role}
                </li>
              ))}
              {filteredResults.length === 0 && (
                <li className="px-4 py-2 text-gray-500">No matches found</li>
              )}
            </ul>
          )}

        </div>
          {/* selected employees */}
          <div className="flex flex-wrap gap-2 w-[45rem] ">
            {selectedEmployees.map((emp) => (
              <div
                className="flex gap-1 items-center bg-[#f5f6f7] py-[0.125rem] px-2 my-2 rounded-[12.5rem]"
                key={emp.id}
              >
                <img className="w-5 h-5" src={employeePng} alt="" />
                <p className="text-sm font-medium text-[#091e42] ">{emp.name}</p>
                <p  onClick={()=>removeItem(emp.id)} className="cursor-pointer text-sm">x</p>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default BasicDetails;
