import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css";

export default function AdminLogin() {
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="admin-login-page">
      {/* Decorative background circles */}
      <div className="admin-bg-circle admin-bg-circle-1"></div>
      <div className="admin-bg-circle admin-bg-circle-2"></div>

      <div className="admin-login-wrapper">
        {/* ===== LEFT CONTENT ===== */}
        <div className="admin-login-info">
          <button className="admin-back-btn">← Back to role selection</button>

          <h1 className="admin-title">Admin Login</h1>
          <p className="admin-subtitle">
            Access the administration dashboard and system controls
          </p>

          <ul className="admin-feature-list">
            <li>System Management</li>
            <li>User & Role Control</li>
            <li>Analytics & Reports</li>
            <li>Security Monitoring</li>
          </ul>

          <div className="admin-security-note">
            This is a secure administrative portal. All actions are logged.
          </div>
        </div>

        {/* ===== RIGHT LOGIN CARD ===== */}
        <div className="admin-login-card">
          <h2>Admin Portal</h2>
          <p className="admin-card-subtitle">
            Enter your credentials to access the admin panel
          </p>

          <form className="admin-login-form">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="admin@rohatiayurved.com"
            />

            <div className="admin-password-row">
              <label>Password</label>
              <span 
                className="admin-forgot" 
                onClick={handleForgotPassword}
                style={{ cursor: 'pointer' }}
              >
                Forgot Password?
              </span>
            </div>

            <input
              type="password"
              placeholder="Enter your secure password"
            />

            <button type="submit" className="admin-login-btn">
              Sign In to Admin Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}