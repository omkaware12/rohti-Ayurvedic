import "../styles/Viewer.css";

export default function ViewerLogin() {
  return (
    <div className="viewer-login-page">
      {/* Decorative circles */}
      <div className="viewer-bg-circle viewer-bg-circle-1"></div>
      <div className="viewer-bg-circle viewer-bg-circle-2"></div>

      <div className="viewer-login-wrapper">
        {/* LEFT INFO PANEL */}
        <div className="viewer-login-info">
          <button className="viewer-back-btn">← Back to role selection</button>

          <h1 className="viewer-title">Viewer Login</h1>
          <p className="viewer-subtitle">
            View assigned records, reports, and authorized information
          </p>

          <ul className="viewer-feature-list">
            <li>Read-Only Access</li>
            <li>View Reports & Records</li>
            <li>Audit & Reference Data</li>
            <li>Secure Information Access</li>
          </ul>

          <div className="viewer-security-note">
            This portal provides restricted, read-only access. All activity is monitored.
          </div>
        </div>

        {/* RIGHT LOGIN CARD */}
        <div className="viewer-login-card">
          <h2>Viewer Portal</h2>
          <p className="viewer-card-subtitle">
            Enter your credentials to continue
          </p>

          <form className="viewer-login-form">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="viewer@rohatiayurved.com"
            />

            <div className="viewer-password-row">
              <label>Password</label>
              <span className="viewer-forgot">Forgot Password?</span>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
            />

            <button type="submit" className="viewer-login-btn">
              Sign In to Viewer Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
