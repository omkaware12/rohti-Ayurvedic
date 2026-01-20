import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/table.css";
import "../../styles/modal.css";

const ITEMS_PER_PAGE = 10;

const initialMachines = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  machineName: `Machine ${i + 1}`,
  fuelType: "GAS",
  gasConsumptionInKgs: 0.2,
}));

const GetAllMachines = () => {
  const navigate = useNavigate();
  const [machines, setMachines] = useState(initialMachines);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMachine, setSelectedMachine] = useState(null);

  const totalPages = Math.ceil(machines.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentData = machines.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleDelete = () => {
    if (!window.confirm("Delete this machine?")) return;

    setMachines((prev) =>
      prev.filter((m) => m.id !== selectedMachine.id)
    );
    setSelectedMachine(null);
  };

  return (
    <div className="table-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2 className="page-title">All Machines</h2>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Machine Name</th>
              <th>Fuel Type</th>
              <th>Gas Consumption (KG)</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((m, i) => (
              <tr
                key={m.id}
                className="clickable-row"
                onClick={() => setSelectedMachine(m)}
              >
                <td>{startIndex + i + 1}</td>
                <td>{m.machineName}</td>
                <td>{m.fuelType}</td>
                <td>{m.gasConsumptionInKgs}</td>
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

      {/* MODAL */}
      {selectedMachine && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button
              className="modal-close"
              onClick={() => setSelectedMachine(null)}
            >
              ✕
            </button>

            <h3>{selectedMachine.machineName}</h3>

            <p><strong>Fuel Type:</strong> {selectedMachine.fuelType}</p>
            <p>
              <strong>Gas Consumption:</strong>{" "}
              {selectedMachine.gasConsumptionInKgs} KG
            </p>

            <div className="modal-actions">
              <button
                className="btn update"
                onClick={() =>
                  navigate(
                    `/dashboard/machines/update/${selectedMachine.id}`
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

export default GetAllMachines;
