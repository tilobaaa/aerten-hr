import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div className="flex">
      <SideBar />
      <main className="ml-56 w-full py-4">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
