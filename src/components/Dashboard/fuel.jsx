import { useState } from "react";
import { Droplet, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./fuel.css";

const Fuel = () => {
  const navigate = useNavigate();

  const [fuelType, setFuelType] = useState("");
  const [unit, setUnit] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      fuel_type: fuelType,
      cost_per_unit: cost,
      unit,
    };

    console.log(payload);
  };

  return (
    <div className="fuel-page">
      {/* Back Button */}
      <button className="fuel-back-btn" onClick={() => navigate("/dashboard")}>
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="fuel-card">
        <div className="fuel-header">
          <Droplet size={30} />
          <h2>Fuel Configuration</h2>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Fuel Type */}
          <div className="fuel-section">
            <label>Fuel Type</label>
            <div className="fuel-toggle">
              <button
                type="button"
                className={fuelType === "ELECTRICITY" ? "active" : ""}
                onClick={() => setFuelType("ELECTRICITY")}
              >
                Electricity
              </button>

              <button
                type="button"
                className={fuelType === "GAS" ? "active" : ""}
                onClick={() => setFuelType("GAS")}
              >
                Gas
              </button>
            </div>
          </div>

          {/* Cost */}
          <div className="fuel-section">
            <label>Cost per unit</label>
            <input
              type="number"
              placeholder="Enter cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              required
            />
          </div>

          {/* Unit */}
          <div className="fuel-section">
            <label>Unit</label>
            <div className="fuel-toggle">
              <button
                type="button"
                className={unit === "kg" ? "active" : ""}
                onClick={() => setUnit("kg")}
              >
                Kg
              </button>

              <button
                type="button"
                className={unit === "unit" ? "active" : ""}
                onClick={() => setUnit("unit")}
              >
                Unit
              </button>
            </div>
          </div>

          <button className="fuel-submit-btn" type="submit">
            Save Fuel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Fuel;
