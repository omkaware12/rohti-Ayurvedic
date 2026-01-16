import { Search, Bell, ChevronDown } from "lucide-react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Search */}
      <div className="header-search">
        <Search size={18} className="header-search-icon" />
        <input
          type="text"
          placeholder="Search"
          className="header-search-input"
        />
      </div>

      {/* Right */}
      <div className="header-right">
        <div className="header-notification">
          <Bell size={20} />
          <span className="header-notification-badge" />
        </div>

        <div className="header-profile">
          <div className="header-profile-avatar">RA</div>

          <div className="header-profile-info">
            <span className="header-profile-name">
              Rohti Admin
            </span>
            <span className="header-profile-role">
              Comapny
            </span>
          </div>

          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  );
};

export default Header;
