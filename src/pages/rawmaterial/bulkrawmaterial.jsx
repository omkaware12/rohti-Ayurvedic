import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./bulkRawMaterial.css";

const MATERIAL_TYPES = ["CHURN", "VATI", "YOG", "LOH", "RAS", "GUGGUL", "PATRA"];
const UNITS = ["KG", "GM", "LIT"];

const BulkRawMaterial = () => {
  const navigate = useNavigate();

  const [rows, setRows] = useState([
    { rawMaterialName: "", rawMaterialType: "", rawMaterialUnit: "" },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      { rawMaterialName: "", rawMaterialType: "", rawMaterialUnit: "" },
    ]);
  };

  const deleteRow = (index) => {
    if (rows.length === 1) return;
    setRows(rows.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  const handleSubmit = () => {
    console.log(rows);
  };

  return (
    <div className="bulk-page">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="bulk-container">
        <h2>Create Raw Materials (Bulk)</h2>

        <div className="bulk-table">
          {rows.map((row, index) => (
            <div className="bulk-row" key={index}>
              <input
                placeholder="Raw Material Name"
                value={row.rawMaterialName}
                onChange={(e) =>
                  handleChange(index, "rawMaterialName", e.target.value)
                }
              />

              <select
                value={row.rawMaterialType}
                onChange={(e) =>
                  handleChange(index, "rawMaterialType", e.target.value)
                }
              >
                <option value="">Type</option>
                {MATERIAL_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              <select
                value={row.rawMaterialUnit}
                onChange={(e) =>
                  handleChange(index, "rawMaterialUnit", e.target.value)
                }
              >
                <option value="">Unit</option>
                {UNITS.map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </select>

              {/* Delete Button */}
              <button
                className="delete-btn"
                onClick={() => deleteRow(index)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="bulk-actions">
          <button className="secondary" onClick={addRow}>
            + Add Row
          </button>
          <button className="primary" onClick={handleSubmit}>
            Save All
          </button>
        </div>
      </div>
    </div>
  );
};

export default BulkRawMaterial;
