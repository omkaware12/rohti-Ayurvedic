import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddMachines.css";

const AddMachine = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    machineName: "",
    fuelType: "",
    gasConsumptionInKgs: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Create Machine:", formData);
    alert("Machine created successfully");
    navigate(-1);
  };

  return (
    <div className="form-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="form-card">
        <h2>Create Machine</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Machine Name</label>
            <input
              name="machineName"
              value={formData.machineName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Fuel Type</label>
            <select
              name="fuelType"
              value={formData.fuelType}
              onChange={handleChange}
              required
            >
              <option value="">Select fuel</option>
              <option value="GAS">GAS</option>
              <option value="DIESEL">DIESEL</option>
              <option value="ELECTRIC">ELECTRIC</option>
            </select>
          </div>

          <div className="form-group">
            <label>Gas Consumption (KG)</label>
            <input
              type="number"
              step="0.01"
              name="gasConsumptionInKgs"
              value={formData.gasConsumptionInKgs}
              onChange={handleChange}
              required
            />
          </div>

          <button className="submit-btn">Create Machine</button>
        </form>
      </div>
    </div>
  );
};

export default AddMachine;
