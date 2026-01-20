import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./UpdateMachines.css";

const UpdateMachine = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    machineName: "",
    fuelType: "",
    gasConsumptionInKgs: "",
  });

  useEffect(() => {
    // Dummy fetch
    setFormData({
      machineName: "Vibro Shf",
      fuelType: "GAS",
      gasConsumptionInKgs: 0.2,
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Machine:", formData);
    alert("Machine updated successfully");
    navigate(-1);
  };

  return (
    <div className="form-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="form-card">
        <h2>Update Machine</h2>

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

          <button className="submit-btn">Update Machine</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMachine;
