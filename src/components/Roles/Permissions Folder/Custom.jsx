import React, { useState } from "react";
import { employees } from "../../../assets/requestArray";
import employeePic from "../../../assets/employee-avatar.png";
import ToggleButton from "../../utilities/ToggleButton";

const Custom = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  const toggleSearch = () => setSearchVisible((prev) => !prev);

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
    <div>
      <div className="h-80 w-full flex flex-col gap-5 items-center justify-center">
        {selectedEmployees.length === 0 ? (
          <div className="w-full flex flex-col gap-5 items-center justify-center">
            <div className="w-[9.1875rem] h-[4.875rem] bg-[#d9d9d9]"></div>
            <p className="w-[21.25rem] font-medium text-sm ">
              If you need to set permission for a specific team, role or
              Individual, click here to search and add them
            </p>
          </div>
        ) : (
          <div className="mb-30 w-[65.625rem]">
            <p className="text-[#47586e] text-sm font-medium mb-[0.69rem]">
              Set custom permission for:{" "}
            </p>
            <div className="flex flex-wrap gap-2 ">
              {selectedEmployees.map((emp) => (
                <div
                  className="flex gap-1 items-center cursor-pointer py-[0.12rem] px-[0.62rem] rounded-2xl bg-[#f5f6f7]"
                  key={emp.id}
                >
                  <img
                    className="w-[1.125rem] h-[1.125rem] rounded-full"
                    src={employeePic}
                    alt=""
                  />
                  <p className="text-[#091e42] text-sm font-medium ">
                    {emp.name}
                  </p>
                  <p
                    onClick={() => {
                      removeItem(emp.id);
                    }}
                    className=""
                  >
                    x
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="flex flex-col gap-4 items-center w-full">
          <button
            onClick={toggleSearch}
            className="px-4 py-[0.62rem] flex gap-2 items-center cursor-pointer border rounded-[1.8125rem] border-[#e6e7ec] "
          >
            <p className="text-[1rem] text-[#676E7E]">+</p>
            <p className="text-sm text-[#0e2354]">
              {searchVisible ? "Cancel" : "Add"}
            </p>
          </button>

          {/* search Input */}
          {searchVisible && (
            <div className="relative  w-full flex flex-col items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, role, or team"
                className="w-2/3 border border-gray-300 p-2 rounded"
              />

              {/* suggestions */}
              {searchQuery && (
                <ul className="absolute bg-white shadow-md rounded mt-10 z-10 w-full max-h-40 overflow-y-auto">
                  {filteredResults.map((emp) => (
                    <li
                      key={emp.id}
                      onClick={() => handleSelect(emp)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <strong>{emp.name}</strong> — {emp.role}
                    </li>
                  ))}
                  {filteredResults.length === 0 && (
                    <li className="px-4 py-2 text-gray-500">
                      No matches found
                    </li>
                  )}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>

      <div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-[#8993a4] font-semibold">Employee Access</p>
                <div className="flex items-center gap-[0.12rem]">
                  <ToggleButton />
                  <p className="text-sm text-black font-medium">Enable all</p>
                </div>
              </div>
      
              <div className="my-6 grid grid-cols-2 gap-[0.88rem]">
                <div className=" flex gap-3 items-center px-2  border-b-1 border-[#eff1f4]">
                  <ToggleButton />
                  <div className="flex flex-col py-4">
                    <p className="text-[#091e42] text-sm font-bold">
                      Access to Payroll Data
                    </p>
                    <p className="text-sm text-[#909dad]">
                      Can create job posting and manage new hires
                    </p>
                  </div>
                </div>
                <div className=" flex gap-3 items-center   border-b-1 border-[#eff1f4]">
                  <ToggleButton />
                  <div className="flex flex-col py-4">
                    <p className="text-[#091e42] text-sm font-bold">
                      Can see information about other employees
                    </p>
                    <p className="text-sm text-[#909dad]">
                      Enables access to view employee profile informations. Doesn’t
                      permit edit access
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-center basis-1/2 border-b-1 border-[#eff1f4]">
                  <ToggleButton />
                  <div className="flex flex-col py-4">
                    <p className="text-[#091e42] text-sm font-bold">
                      Can add or delete employee
                    </p>
                    <p className="text-sm text-[#909dad]">
                      This enables general access to employee information
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-center basis-1/2 border-b-1 border-[#eff1f4]">
                  <ToggleButton />
                  <div className="flex flex-col py-4">
                    <p className="text-[#091e42] text-sm font-bold">
                      Can add/edit roles
                    </p>
                    <p className="text-sm text-[#909dad]">
                      This enables general access to creating or modifying roles
                    </p>
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
};

export default Custom;
