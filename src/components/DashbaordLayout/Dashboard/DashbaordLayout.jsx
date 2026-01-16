import Sidebar from "../Sidebar/sidebar";
import Header from "../header/header";
import { Outlet } from "react-router-dom";
import "./DashbaordLayout.css";

const DashboardLayout = () => {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Header />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
