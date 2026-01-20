import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  RAW_MATERIAL_TYPES,
  RAW_MATERIAL_UNITS,
} from "../../constants/rawmaterial";
import "./AddRawMaterial.css";

export default function CreateRawMaterial() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    rawMaterialName: "",
    rawMaterialType: "",
    rawMaterialUnit: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // API CALL HERE
  };

  return (
    <div className="form-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="form-card">
        <h2>Create Raw Material</h2>

        <form onSubmit={handleSubmit}>
          <label>Raw Material Name</label>
          <input
            name="rawMaterialName"
            value={form.rawMaterialName}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />

          <label>Raw Material Type</label>
          <select
            name="rawMaterialType"
            value={form.rawMaterialType}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            {RAW_MATERIAL_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <label>Unit</label>
          <select
            name="rawMaterialUnit"
            value={form.rawMaterialUnit}
            onChange={handleChange}
            required
          >
            <option value="">Select Unit</option>
            {RAW_MATERIAL_UNITS.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>

          <button type="submit" className="submit-btn">
            Save Raw Material
          </button>
        </form>
      </div>
    </div>
  );
}
