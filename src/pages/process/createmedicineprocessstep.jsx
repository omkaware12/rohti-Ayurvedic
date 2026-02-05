import { useState } from "react";
import "./createmedicineprocessstep.css";

const CreateMedicineStep = () => {
  const [form, setForm] = useState({
    stepName: "",
    description: "",
    pricePerUnit: "",
    unit: "MIN",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="step-page">
      <div className="step-card">
        <h3>Create Medicine Step</h3>

        <form className="step-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Step Name</label>
            <input
              type="text"
              name="stepName"
              placeholder="Enter step name"
              value={form.stepName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="3"
              name="description"
              placeholder="Describe the process"
              value={form.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Price per Unit</label>
              <input
                type="number"
                name="pricePerUnit"
                placeholder="0.00"
                value={form.pricePerUnit}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Unit</label>
              <select
                name="unit"
                value={form.unit}
                onChange={handleChange}
              >
                <option value="MIN">MIN</option>
                <option value="HR">HR</option>
                <option value="PCS">PCS</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button className="btn submit" type="submit">
              Create Step
            </button>
            <button className="btn cancel" type="button">
              ✕
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMedicineStep;