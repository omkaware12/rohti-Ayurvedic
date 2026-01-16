import { useNavigate } from "react-router-dom";
import "./rawmaterial.css";

const RawMaterialForm = () => {
  const navigate = useNavigate();

  return (
    <div className="raw-page">
      {/* Back Button */}
      <button
        className="raw-back-btn"
        onClick={() => navigate("/dashboard")}
      >
        ← Back
      </button>

      <form className="raw-form">
        <h2>Raw Material Details</h2>

        <div className="raw-group">
          <label>Raw Material Name</label>
          <input
            type="text"
            placeholder="Enter raw material name"
            required
          />
        </div>

        <div className="raw-group">
          <label>Unit</label>
          <select required>
            <option value="">Select unit</option>
            <option value="kg">kg</option>
            <option value="gm">gm</option>
            <option value="lit">lit</option>
          </select>
        </div>

        <div className="raw-group raw-checkbox">
          <input type="checkbox" id="active" defaultChecked />
          <label htmlFor="active">Active</label>
        </div>

        <button type="submit" className="raw-submit-btn">
          Save Raw Material
        </button>
      </form>
    </div>
  );
};

export default RawMaterialForm;
