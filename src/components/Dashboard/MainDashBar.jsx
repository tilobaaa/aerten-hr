import Header from "../Header";
import LeftSideDash from "./LeftSideDash";
import RightSideDash from "./RightSideDash";

const MainDashBar = () => {
  return (
    <div className=" w-full">
   
      {/* main content */}
      <div className="p-12">
        <div className="w-full ">
          <h2 className="text-gray-900 font-bold text-3xl">Hello Omah</h2>
          <p className="text-[#808080] text-sm">Let's be productive today</p>
        </div>
        <div className="flex flex-row gap-3">
          <LeftSideDash />
          <RightSideDash />
        </div>
      </div>
    </div>
  );
};

export default MainDashBar;
