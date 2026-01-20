import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./updatemedicine.css";

const UpdateMedicine = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    medicineName: "",
    medicineType: "",
    description: "",
  });

  // 🔹 Dummy pre-filled data (replace with API later)
  useEffect(() => {
    const fetchedMedicine = {
      medicineName: "Chyawanprash",
      medicineType: "KALPA",
      description:
        "Classical Ayurvedic formulation. Increases immunity, reduces fatigue, and promotes overall well-being.",
    };

    setFormData(fetchedMedicine);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Medicine:", formData);

    // 🔥 API CALL WILL GO HERE
    // PUT /api/medicines/:id

    alert("Medicine updated successfully!");
    navigate(-1);
  };

  return (
    <div className="form-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="form-card">
        <h2>Update Medicine</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Medicine Name</label>
            <input
              type="text"
              name="medicineName"
              value={formData.medicineName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Medicine Type</label>
            <select
              name="medicineType"
              value={formData.medicineType}
              onChange={handleChange}
              required
            >
              <option value="">Select type</option>
              <option value="KALPA">KALPA</option>
              <option value="TABLET">TABLET</option>
              <option value="SYRUP">SYRUP</option>
              <option value="POWDER">POWDER</option>
            </select>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <button className="submit-btn" type="submit">
            Update Medicine
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMedicine;
