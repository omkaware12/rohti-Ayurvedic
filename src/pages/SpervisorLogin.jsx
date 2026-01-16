import "../styles/SupervisorLogin.css";

export default function SupervisorLogin() {
  return (
    <div className="supervisor-login-page">
      {/* Decorative circles */}
      <div className="supervisor-bg-circle supervisor-bg-circle-1"></div>
      <div className="supervisor-bg-circle supervisor-bg-circle-2"></div>

      <div className="supervisor-login-wrapper">
        {/* LEFT INFO PANEL */}
        <div className="supervisor-login-info">
          <button className="supervisor-back-btn">← Back to role selection</button>

          <h1 className="supervisor-title">Supervisor Login</h1>
          <p className="supervisor-subtitle">
            Access supervision tools and operational controls
          </p>

          <ul className="supervisor-feature-list">
            <li>Team Oversight</li>
            <li>Case Review & Approvals</li>
            <li>Performance Monitoring</li>
            <li>Operational Reports</li>
          </ul>

          <div className="supervisor-security-note">
            This is a secure supervisory portal. All actions are logged.
          </div>
        </div>

        {/* RIGHT LOGIN CARD */}
        <div className="supervisor-login-card">
          <h2>Supervisor Portal</h2>
          <p className="supervisor-card-subtitle">
            Enter your credentials to access the supervisor dashboard
          </p>

          <form className="supervisor-login-form">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="supervisor@rohatiayurved.com"
            />

            <div className="supervisor-password-row">
              <label>Password</label>
              <span className="supervisor-forgot">Forgot Password?</span>
            </div>

            <input
              type="password"
              placeholder="Enter your secure password"
            />

            <button type="submit" className="supervisor-login-btn">
              Sign In to Supervisor Dashboard
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
