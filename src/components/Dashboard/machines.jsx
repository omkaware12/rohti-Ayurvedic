import { useNavigate } from "react-router-dom";
import "./machines.css";

const MachineForm = () => {
  const navigate = useNavigate();

  return (
    <div className="machine-page">
      {/* Back Button */}
      <button
        className="machine-back-btn"
        onClick={() => navigate("/dashboard")}
      >
        ← Back
      </button>

      <form className="machine-form">
        <h2>Machine Details</h2>

        <div className="machine-group">
          <label>Machine Name</label>
          <input
            type="text"
            placeholder="Enter machine name"
            required
          />
        </div>

        <div className="machine-group">
          <label>Electricity Unit / Hour</label>
          <input
            type="number"
            step="0.01"
            placeholder="Enter electricity units"
            required
          />
        </div>

        <div className="machine-group">
          <label>Cost / Hour</label>
          <input
            type="number"
            step="0.01"
            placeholder="Enter cost per hour"
            required
          />
        </div>

        {/* Active */}
        <div className="machine-group machine-checkbox">
          <input type="checkbox" id="machine-active" defaultChecked />
          <label htmlFor="machine-active">Active</label>
        </div>

        <button type="submit" className="machine-submit-btn">
          Save Machine
        </button>
      </form>
    </div>
  );
};

export default MachineForm;
