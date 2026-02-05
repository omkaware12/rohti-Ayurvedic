import { Bell, ChevronDown, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

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

        {/* CLICKABLE PROFILE */}
        <div
          className="profile"
          onClick={() => navigate("/profile")}
          style={{ cursor: "pointer" }}
        >
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