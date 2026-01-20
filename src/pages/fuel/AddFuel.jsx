import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddFuel.css";

const AddFuel = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fuelType: "",
    costPerUnit: "",
    fuelUnit: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      fuelType: formData.fuelType,
      costPerUnit: Number(formData.costPerUnit),
      fuelUnit: formData.fuelUnit,
    };

    console.log("Create Fuel Payload:", payload);

    alert("Fuel created successfully");
    navigate(-1);
  };

  return (
    <div className="form-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="form-card">
        <h2>Create Fuel</h2>

        <form onSubmit={handleSubmit}>
          {/* Fuel Type */}
          <div className="form-group">
            <label>Fuel Type</label>
            <select
              name="fuelType"
              value={formData.fuelType}
              onChange={handleChange}
              required
            >
              <option value="">Select fuel type</option>
              <option value="GAS">GAS</option>
              <option value="ELECTRICITY">ELECTRICITY</option>
            </select>
          </div>

          {/* Cost Per Unit */}
          <div className="form-group">
            <label>Cost Per Unit</label>
            <input
              type="number"
              step="0.00000001"
              name="costPerUnit"
              value={formData.costPerUnit}
              onChange={handleChange}
              placeholder="e.g. 89.47"
              required
            />
          </div>

          {/* Fuel Unit */}
          <div className="form-group">
            <label>Fuel Unit</label>
            <select
              name="fuelUnit"
              value={formData.fuelUnit}
              onChange={handleChange}
              required
            >
              <option value="">Select unit</option>
              <option value="KG">KG</option>
              <option value="UNIT">UNIT</option>
            </select>
          </div>

          <button className="submit-btn">Create Fuel</button>
        </form>
      </div>
    </div>
  );
};

export default AddFuel;
