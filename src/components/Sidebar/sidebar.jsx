import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Fuel,
  Pill,
  Cog,
  Box,
  Repeat,
  Archive,
  PlusSquare,
} from "lucide-react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin</h2>

      <NavLink to="/dashboard" className="sidebar-link">
        <LayoutDashboard size={18} />
        <span>Dashboard</span>
      </NavLink>

      <NavLink to="/dashboard/fuel" className="sidebar-link">
        <Fuel size={18} />
        <span>Fuel</span>
      </NavLink>

      <NavLink to="/dashboard/medicines" className="sidebar-link">
        <Pill size={18} />
        <span>Medicines</span>
      </NavLink>

      <NavLink to="/dashboard/machines" className="sidebar-link">
        <Cog size={18} />
        <span>Machines</span>
      </NavLink>

      <NavLink to="/dashboard/rawmaterial" className="sidebar-link">
        <Box size={18} />
        <span>Raw Material</span>
      </NavLink>

      <NavLink
        to="/dashboard/rawmaterial-transaction"
        className="sidebar-link"
      >
        <Repeat size={18} />
        <span>Raw Material Transaction</span>
      </NavLink>

      <NavLink
        to="/dashboard/rawmaterial-inventory"
        className="sidebar-link"
      >
        <Archive size={18} />
        <span>Raw Material Inventory</span>
      </NavLink>

      <NavLink
        to="/dashboard/rawmaterial-to-medicine"
        className="sidebar-link"
      >
        <PlusSquare size={18} />
        <span>Add Raw Material to Medicines</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;
