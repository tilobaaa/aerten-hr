import React, { useState } from "react";
import { employees } from "../../../assets/requestArray";
import employeePic from "../../../assets/employee-avatar.png";
import ToggleButton from "../../utilities/ToggleButton";
import plusSvg from "../../../assets/plus.svg";
import EmployeeAceess from "./EmployeeAceess";
import TabularCustomPermissions from "./TabularCustomPermissions";

const Custom = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);

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

  const addFromConfirmation = () => {
    setIsConfirmed(false);
    setSearchVisible(true);
  };

  return (
    <div>
      {!isConfirmed && (
        <div
          className={`h-80 w-full flex flex-col gap-5 ${
            selectedEmployees.length === 0 && "items-center justify-center"
          }`}
        >
          <div className="w-full">
            {selectedEmployees.length === 0 ? (
              <div className="w-full flex flex-col gap-5 items-center justify-center">
                <div className="w-[9.1875rem] h-[4.875rem] bg-[#d9d9d9]"></div>
                <p className="w-[21.25rem] font-medium text-sm ">
                  If you need to set permission for a specific team, role or
                  Individual, click here to search and add them
                </p>
              </div>
            ) : (
              <div className="flex justify-between items-start">
                <div className="mb-30 w-[30rem]">
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
                <button
                  onClick={() => {
                    setIsConfirmed(true);
                  }}
                  className="py-[0.62rem] px-4 flex gap-2 items-center border rounded-[1.8125rem] border-[#e6e7ec] cursor-pointer"
                >
                  <img
                    className="w-4 h-4 rounded-[0.75rem] border border-dotted border-[#e6e7ec]  "
                    src={plusSvg}
                    alt=""
                  />
                  <p className="text-sm text-[#0e2354]">Confirm</p>
                </button>
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
              {!isConfirmed && searchVisible && (
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
        </div>
      )}

      {isConfirmed === false && selectedEmployees.length > 0 && (
        <EmployeeAceess />
      )}

      {isConfirmed && (
        <TabularCustomPermissions
          selectedEmployees={selectedEmployees}
          onRemove={removeItem}
          addItem={addFromConfirmation}
        />
      )}
    </div>
  );
};

export default Custom;
