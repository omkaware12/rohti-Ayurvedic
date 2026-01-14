import React from "react";
import {
  Factory,
  UserCog,
  Eye,
} from "lucide-react";
import Navbar from "../components/navbar";
import "../styles/Factory-Login-selectionpage.css"

export default function FactoryRoleSelect() {
  return (
    <div className="login-page">
      {/* Navbar */}
      <Navbar />

      {/* Decorative circles */}
      <div className="bg-circle bg-circle-1"></div>
      <div className="bg-circle bg-circle-2"></div>

      {/* Header */}
      <div className="login-header">
        <h1>Factory Login</h1>
        <p>Select your role to continue</p>
      </div>

      {/* Cards */}
      <div className="login-cards">
        {/* Admin */}
        <div className="login-card">
          <div className="icon">
            <Factory size={32} />
          </div>
          <h2>Factory Admin</h2>
          <p>System control & overall factory management</p>

          <ul>
            <li>Production Oversight</li>
            <li>User Management</li>
            <li>Reports & Analytics</li>
          </ul>

          <button>Continue as Admin</button>
        </div>

        {/* Supervisor */}
        <div className="login-card">
          <div className="icon">
            <UserCog size={32} />
          </div>
          <h2>Supervisor</h2>
          <p>Daily operations & team supervision</p>

          <ul>
            <li>Batch Monitoring</li>
            <li>Staff Coordination</li>
            <li>Quality Checks</li>
          </ul>

          <button>Continue as Supervisor</button>
        </div>

        {/* Viewer */}
        <div className="login-card">
          <div className="icon">
            <Eye size={32} />
          </div>
          <h2>Viewer</h2>
          <p>Read-only access to factory data</p>

          <ul>
            <li>View Reports</li>
            <li>Production Status</li>
            <li>Audit Records</li>
          </ul>

          <button>Continue as Viewer</button>
        </div>
      </div>
    </div>
  );
}