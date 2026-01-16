import { useState } from "react";
import { Users, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./laboure.css";

const Labour = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [rate, setRate] = useState("");
  const [active, setActive] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      labour_name: name,
      role,
      hourly_rate: rate,
      is_active: active,
    };

    console.log(payload);
  };

  return (
    <div className="labour-page">
      {/* Back Button */}
      <button
        className="labour-back-btn"
        onClick={() => navigate("/dashboard")}
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="labour-card">
        <div className="labour-header">
          <Users size={30} />
          <h2>Labour Configuration</h2>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Labour Name */}
          <div className="labour-section">
            <label>Labour Name</label>
            <input
              type="text"
              placeholder="Enter labour name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Role */}
          <div className="labour-section">
            <label>Role</label>
            <div className="labour-toggle">
              <button
                type="button"
                className={role === "PRIMARY" ? "active" : ""}
                onClick={() => setRole("PRIMARY")}
              >
                Primary
              </button>

              <button
                type="button"
                className={role === "HELPER" ? "active" : ""}
                onClick={() => setRole("HELPER")}
              >
                Helper
              </button>
            </div>
          </div>

          {/* Hourly Rate */}
          <div className="labour-section">
            <label>Hourly Rate</label>
            <input
              type="number"
              placeholder="Enter hourly rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              required
            />
          </div>

          {/* Status */}
          <div className="labour-section">
            <label>Status</label>
            <div className="labour-toggle">
              <button
                type="button"
                className={active ? "active" : ""}
                onClick={() => setActive(true)}
              >
                Active
              </button>

              <button
                type="button"
                className={!active ? "active" : ""}
                onClick={() => setActive(false)}
              >
                Inactive
              </button>
            </div>
          </div>

          <button className="labour-submit-btn" type="submit">
            Save Labour
          </button>
        </form>
      </div>
    </div>
  );
};

export default Labour;
