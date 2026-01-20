import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/table.css";
import "../../styles/modal.css";

const ITEMS_PER_PAGE = 10;

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

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete this medicine?"))
      return;

    setMedicines((prev) =>
      prev.filter((m) => m.id !== selectedMedicine.id)
    );

    setSelectedMedicine(null);
  };

  return (
    <div className="table-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2 className="page-title">All Medicines</h2>

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

      {/* Pagination */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          Prev
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          Next
        </button>
      </div>

      {/* 🔥 MEDICINE DETAILS MODAL */}
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
              <p><strong>Type:</strong> {selectedMedicine.medicineType}</p>
              <p><strong>Form:</strong> {selectedMedicine.medicineForm}</p>
              <p>
                <strong>Strength:</strong>{" "}
                {selectedMedicine.strengthValue}{" "}
                {selectedMedicine.medicineUnit}
              </p>
              <p>
                <strong>Description:</strong><br />
                {selectedMedicine.description}
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="modal-actions">
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
          </div>
        </div>
      )}
    </div>
  );
};

export default GetAllMedicines;
