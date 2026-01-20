import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UpdateFuel = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    fuelName: "",
    fuelType: "",
    unit: "",
  });

  useEffect(() => {
    setFormData({
      fuelName: "Diesel",
      fuelType: "DIESEL",
      unit: "LITRE",
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Fuel:", formData);
    alert("Fuel updated successfully");
    navigate(-1);
  };

  return (
    <div className="form-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="form-card">
        <h2>Update Fuel</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Fuel Name</label>
            <input
              name="fuelName"
              value={formData.fuelName}
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
              <option value="PETROL">PETROL</option>
              <option value="DIESEL">DIESEL</option>
              <option value="GAS">GAS</option>
            </select>
          </div>

          <div className="form-group">
            <label>Unit</label>
            <select
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              required
            >
              <option value="LITRE">LITRE</option>
              <option value="KG">KG</option>
            </select>
          </div>

          <button className="submit-btn">Update Fuel</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateFuel;
