import { useNavigate } from "react-router-dom";
import "./MedicineForm.css";

const MedicineForm = () => {
  const navigate = useNavigate();

  return (
    <div className="medicine-page">
      {/* Back Button */}
      <button
        className="medicine-back-btn"
        onClick={() => navigate("/dashboard")}
      >
        ← Back
      </button>

      <form className="medicine-form">
        <h2>Medicine Details</h2>

        <div className="medicine-group">
          <label>Medicine Name</label>
          <input type="text" placeholder="Enter medicine name" required />
        </div>

        <div className="medicine-group">
          <label>Medicine Type</label>
          <select required>
            <option value="">Select type</option>
            <option>BHAVANA</option>
            <option>NO_BHAVANA</option>
            <option>KADHA_PHANT_BASTI_LEP</option>
            <option>GUGGUL_MAKING</option>
            <option>TAIL_MAKING</option>
            <option>GHRUT_MAKING</option>
            <option>KALPA</option>
          </select>
        </div>

        <div className="medicine-group">
          <label>Unit</label>
          <select required>
            <option value="">Select unit</option>
            <option>kg</option>
            <option>gm</option>
          </select>
        </div>

        <div className="medicine-group">
          <label>Description</label>
          <textarea
            placeholder="Enter description"
            rows="4"
          />
        </div>

        <button type="submit" className="medicine-submit-btn">
          Save Medicine
        </button>
      </form>
    </div>
  );
};

export default MedicineForm;
