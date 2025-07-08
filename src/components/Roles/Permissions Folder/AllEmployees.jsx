import React from "react";
import ToggleButton from "../../utilities/ToggleButton";

const AllEmployees = () => {
  return (
    <div className="py-[1.62rem] px-[1.44rem] border-b-1 border-[#eff1f4]">

        {/* manager access */}
      <div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#8993a4] font-semibold">Manager Access</p>
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
                Access to new hires
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

      {/* employee access */}
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

export default AllEmployees;
