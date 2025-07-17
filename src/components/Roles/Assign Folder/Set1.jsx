import React from "react";

const Set1 = ({
  setIsConfirmed,
  closeSvg,
  briefcaseSvg,
  searchSvg,
  searchRoleQuery,
  setSearchRoleQuery,
  helpCircleSvg,
  filteredRolesSelected,
  handleRolesSelected,
  onRemoveRole,
  roleSelected,
  plusSvg,
  
}) => {
  return (
    <div
      onClick={() => {
        setIsConfirmed(false);
      }}
      className="z-50 bg-white rounded-xl w-[32.875rem] h-[28.937rem] p-10 pb-[3.875rem] flex flex-col gap-[1.88rem] relative"
    >
      <div className="absolute -top-10 right-0 cursor-pointer">
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
        className={`rounded-lg border border-[#6a1039] bg-[#6a1039] w-full shadow-sm py-[0.625rem] text-sm font-semibold text-white cursor-pointer`}
      >
        Assign
      </button>
    </div>
  );
};

export default Set1;
