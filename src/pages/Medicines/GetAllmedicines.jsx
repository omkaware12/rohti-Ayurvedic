import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/table.css";
import "../../styles/modal.css";

const ITEMS_PER_PAGE = 10;

/* ---------- DUMMY MEDICINES ---------- */
const initialMedicines = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  medicineName: `Medicine ${i + 1}`,
  medicineType: "KALPA",
  medicineForm: "TABLET",
  strengthValue: "500",
  medicineUnit: "MG",
  description:
    "Classical Ayurvedic formulation for immunity and vitality.",
}));

/* ---------- DUMMY RAW MATERIAL DATA ---------- */
const rawMaterialMap = {
  1: [
    { rawMaterialId: 1, standardQuantity: 0.001, unit: "KG" },
    { rawMaterialId: 2, standardQuantity: 3, unit: "GM" },
    { rawMaterialId: 3, standardQuantity: 2.5, unit: "GM" },
  ],
  2: [{ rawMaterialId: 4, standardQuantity: 500, unit: "MG" }],
};

/* ---------- DUMMY MACHINE DATA ---------- */
const machineMap = {
  1: [
    { machineId: 1, machineName: "Mixer", usageTime: 2.5 },
    { machineId: 2, machineName: "Dryer", usageTime: 1.5 },
  ],
  2: [{ machineId: 3, machineName: "Tablet Press", usageTime: 3 }],
};

const GetAllMedicines = () => {
  const navigate = useNavigate();

  const [medicines, setMedicines] = useState(initialMedicines);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const totalPages = Math.ceil(medicines.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentData = medicines.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  /* ---------- DELETE ---------- */
  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete this medicine?"))
      return;

    setMedicines((prev) =>
      prev.filter((m) => m.id !== selectedMedicine.id)
    );
    setSelectedMedicine(null);
  };

  /* ---------- SHOW RAW MATERIALS ---------- */
  const handleShowRawMaterials = () => {
    const materials = rawMaterialMap[selectedMedicine.id] || [];
    console.log("Attached Raw Materials:", materials);

    if (materials.length === 0) {
      alert("No raw materials attached to this medicine.");
    }
  };

  /* ---------- SHOW MACHINES ---------- */
  const handleShowMachines = () => {
    const machines = machineMap[selectedMedicine.id] || [];
    console.log("Attached Machines:", machines);

    if (machines.length === 0) {
      alert("No machines attached to this medicine.");
    }
  };

  return (
    <div className="table-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2 className="page-title">All Medicines</h2>

      {/* ---------- TABLE ---------- */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Medicine Name</th>
              <th>Type</th>
              <th>Form</th>
              <th>Strength</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr
                key={item.id}
                className="clickable-row"
                onClick={() => setSelectedMedicine(item)}
              >
                <td>{startIndex + index + 1}</td>
                <td>{item.medicineName}</td>
                <td>{item.medicineType}</td>
                <td>{item.medicineForm}</td>
                <td>{item.strengthValue}</td>
                <td>{item.medicineUnit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MODAL ================= */}
      {selectedMedicine && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button
              className="modal-close"
              onClick={() => setSelectedMedicine(null)}
            >
              ✕
            </button>

            <h3>{selectedMedicine.medicineName}</h3>

            <div className="modal-details">
              <p>
                <strong>Type:</strong> {selectedMedicine.medicineType}
              </p>
              <p>
                <strong>Form:</strong> {selectedMedicine.medicineForm}
              </p>
              <p>
                <strong>Strength:</strong>{" "}
                {selectedMedicine.strengthValue}{" "}
                {selectedMedicine.medicineUnit}
              </p>
              <p>
                <strong>Description:</strong>
                <br />
                {selectedMedicine.description}
              </p>
            </div>

            {/* ===== ACTION BUTTONS ===== */}
            <div className="modal-actions">
              {/* Row 1 */}
              <div className="action-row">
                <button
                  className="btn update"
                  onClick={() =>
                    navigate(
                      `/dashboard/medicines/update/${selectedMedicine.id}`
                    )
                  }
                >
                  Update
                </button>
                <button className="btn delete" onClick={handleDelete}>
                  Delete
                </button>
              </div>

              {/* Row 2 */}
              <div className="action-row center">
                <button
                  className="btn workspace"
                  onClick={() =>
                    navigate(
                      `/dashboard/medicines/workspace/${selectedMedicine.id}`
                    )
                  }
                >
                  Create Workspace
                </button>
              </div>

              {/* Row 3 */}
              <div className="action-row center">
                <button
                  className="btn raw-material"
                  onClick={() =>
                    navigate(
                      `/dashboard/medicines/${selectedMedicine.id}/add-raw-material`
                    )
                  }
                >
                  Add Raw Material
                </button>
              </div>

              {/* Row 4 */}
              <div className="action-row center">
                <button
                  className="btn raw-material"
                  onClick={handleShowRawMaterials}
                >
                  Show Attached Raw Materials
                </button>
              </div>

              {/* Row 5 */}
              <div className="action-row center">
                <button
                  className="btn workspace"
                  onClick={() =>
                    navigate(
                      `/dashboard/medicines/${selectedMedicine.id}/add-machines`
                    )
                  }
                >
                  Add Machines
                </button>
              </div>

              {/* Row 6 */}
              <div className="action-row center">
                <button
                  className="btn workspace"
                  onClick={handleShowMachines}
                >
                  Show Attached Machines
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetAllMedicines;