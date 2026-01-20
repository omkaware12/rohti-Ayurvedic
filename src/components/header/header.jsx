import { Bell, ChevronDown, Search } from "lucide-react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      {/* LEFT: SEARCH */}
      <div className="header-left">
        <Search size={18} />
        <input type="text" placeholder="Search" />
      </div>

      {/* RIGHT: PROFILE */}
      <div className="header-right">
        <Bell size={20} />

        <div className="profile">
          <div className="avatar">RA</div>

          <div className="profile-info">
            <span className="name">Rohti Admin</span>
            <span className="role">Company</span>
          </div>

          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
};

export default Header;
