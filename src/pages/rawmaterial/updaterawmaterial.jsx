import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./updaterawmaterial.css";
const UpdateRawMaterial = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    rawMaterialName: "",
    rawMaterialType: "",
    unit: "",
  });

  // 🔹 Dummy pre-filled data (replace with API later)
  useEffect(() => {
    const fetchedRawMaterial = {
      rawMaterialName: "Ashwagandha Root",
      rawMaterialType: "HERB",
      unit: "KG",
    };

    setFormData(fetchedRawMaterial);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Raw Material:", formData);

    // 🔥 API CALL WILL GO HERE
    // PUT /api/raw-materials/:id

    alert("Raw material updated successfully!");
    navigate(-1);
  };

  return (
    <div className="form-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="form-card">
        <h2>Update Raw Material</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Raw Material Name</label>
            <input
              type="text"
              name="rawMaterialName"
              value={formData.rawMaterialName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Raw Material Type</label>
            <select
              name="rawMaterialType"
              value={formData.rawMaterialType}
              onChange={handleChange}
              required
            >
              <option value="">Select type</option>
              <option value="HERB">HERB</option>
              <option value="MINERAL">MINERAL</option>
              <option value="OIL">OIL</option>
              <option value="CHEMICAL">CHEMICAL</option>
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
              <option value="">Select unit</option>
              <option value="KG">KG</option>
              <option value="GM">GM</option>
              <option value="LITRE">LITRE</option>
              <option value="ML">ML</option>
              <option value="PCS">PCS</option>
            </select>
          </div>

          <button className="submit-btn" type="submit">
            Update Raw Material
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateRawMaterial;