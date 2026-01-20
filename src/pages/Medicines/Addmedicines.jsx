import { useState } from "react";
import { ArrowLeft, Pill } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Addmedicines.css";

const MEDICINE_TYPES = [
  "KALPA",
  "CHURN",
  "VATI",
  "GUGGUL",
  "RAS",
  "LOH",
  "YOG"
];

const MEDICINE_FORMS = [
  "TABLET",
  "CAPSULE",
  "POWDER",
  "SYRUP",
  "OINTMENT"
];

const MEDICINE_UNITS = ["MG", "GM", "ML"];

const AddMedicine = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    medicineName: "",
    medicineType: "",
    medicineForm: "",
    strengthValue: "",
    medicineUnit: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Medicine Payload:", form);
    // POST API will go here later
  };

  return (
    <div className="medicine-page">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} /> Back
      </button>

      <form className="medicine-card" onSubmit={handleSubmit}>
        <div className="medicine-header">
          <Pill size={28} />
          <h2>Create Medicine</h2>
        </div>

        {/* Medicine Name */}
        <div className="form-group">
          <label>Medicine Name</label>
          <input
            type="text"
            name="medicineName"
            placeholder="Enter medicine name"
            value={form.medicineName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Type & Form */}
        <div className="form-row">
          <div className="form-group">
            <label>Medicine Type</label>
            <select
              name="medicineType"
              value={form.medicineType}
              onChange={handleChange}
              required
            >
              <option value="">Select Type</option>
              {MEDICINE_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Medicine Form</label>
            <select
              name="medicineForm"
              value={form.medicineForm}
              onChange={handleChange}
              required
            >
              <option value="">Select Form</option>
              {MEDICINE_FORMS.map(form => (
                <option key={form} value={form}>{form}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Strength */}
        <div className="form-row">
          <div className="form-group">
            <label>Strength Value</label>
            <input
              type="number"
              name="strengthValue"
              placeholder="500"
              value={form.strengthValue}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Unit</label>
            <select
              name="medicineUnit"
              value={form.medicineUnit}
              onChange={handleChange}
              required
            >
              <option value="">Select Unit</option>
              {MEDICINE_UNITS.map(unit => (
                <option key={unit} value={unit}>{unit}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Description */}
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Enter medicine description"
            value={form.description}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <button type="submit" className="submit-btn">
          Save Medicine
        </button>
      </form>
    </div>
  );
};

export default AddMedicine;
