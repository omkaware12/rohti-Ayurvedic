import {
  LayoutGrid,
  Fuel,
  Users,
  Settings,
  Box,
  
} from "lucide-react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Admin</h2>

      <nav className="sidebar-nav">
        <a className="sidebar-link active">
          <LayoutGrid size={18} />
          Dashboard
        </a>

        <a className="sidebar-link">
          <Fuel size={18} />
          Fuel
        </a>

        <a className="sidebar-link">
          <Users size={18} />
          Labour
        </a>

        <a className="sidebar-link">
          <Settings size={18} />
          Machines
        </a>

        <a className="sidebar-link">
          <Box size={18} />
          Raw Material
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
