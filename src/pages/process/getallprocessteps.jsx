import { useState } from "react";
import "../../styles/table.css";
import "../../styles/modal.css";

const ITEMS_PER_PAGE = 5;

/* ===== MOCK PROCESS STEPS DATA ===== */
const initialSteps = Array.from({ length: 17 }, (_, i) => ({
  id: i + 1,
  stepName: `Out from Drum Basic ${i + 1}`,
  description: "Take raw material out of drum",
  pricePerUnit: 11.7,
  unit: "MIN",
}));

const GetAllProcessSteps = () => {
  const [steps, setSteps] = useState(initialSteps);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStep, setSelectedStep] = useState(null);

  const totalPages = Math.ceil(steps.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentData = steps.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="table-page">
      <h2 className="page-title">Medicine Process Steps</h2>

      {/* ===== TABLE ===== */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Step Name</th>
              <th>Description</th>
              <th>Price / Unit</th>
              <th>Unit</th>
            </tr>
          </thead>

          <tbody>
            {currentData.map((step, index) => (
              <tr
                key={step.id}
                className="clickable-row"
                onClick={() => setSelectedStep(step)}
              >
                <td>{startIndex + index + 1}</td>
                <td>{step.stepName}</td>
                <td>{step.description}</td>
                <td>{step.pricePerUnit}</td>
                <td>{step.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== PAGINATION ===== */}
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

      {/* ===== MODAL ===== */}
      {selectedStep && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button
              className="modal-close"
              onClick={() => setSelectedStep(null)}
            >
              ✕
            </button>

            <h3>{selectedStep.stepName}</h3>

            <div className="modal-details">
              <p>
                <strong>Description:</strong><br />
                {selectedStep.description}
              </p>

              <p>
                <strong>Price Per Unit:</strong>{" "}
                {selectedStep.pricePerUnit}
              </p>

              <p>
                <strong>Unit:</strong> {selectedStep.unit}
              </p>
            </div>

            <div className="modal-actions">
              <button className="btn update">Update</button>
              <button className="btn delete">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetAllProcessSteps;