import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/table.css";
import "../../styles/modal.css";

const ITEMS_PER_PAGE = 10;

const initialFuel = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  fuelType: i % 2 === 0 ? "GAS" : "ELECTRICITY",
  fuelUnit: i % 2 === 0 ? "KG" : "UNIT",
  costPerUnit: (85 + i * 1.5).toFixed(2),
}));

const GetAllFuel = () => {
  const navigate = useNavigate();
  const [fuelList, setFuelList] = useState(initialFuel);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFuel, setSelectedFuel] = useState(null);

  const totalPages = Math.ceil(fuelList.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentData = fuelList.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleDelete = () => {
    if (!window.confirm("Delete this fuel?")) return;

    setFuelList((prev) =>
      prev.filter((f) => f.id !== selectedFuel.id)
    );
    setSelectedFuel(null);
  };

  return (
    <div className="table-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2 className="page-title">All Fuel</h2>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Fuel Type</th>
              <th>Unit</th>
              <th>Cost per Unit</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((f, i) => (
              <tr
                key={f.id}
                className="clickable-row"
                onClick={() => setSelectedFuel(f)}
              >
                <td>{startIndex + i + 1}</td>
                <td>{f.fuelType}</td>
                <td>{f.fuelUnit}</td>
                <td>₹ {f.costPerUnit}</td>
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
      {selectedFuel && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button
              className="modal-close"
              onClick={() => setSelectedFuel(null)}
            >
              ✕
            </button>

            <h3>{selectedFuel.fuelType}</h3>

            <p>
              <strong>Unit:</strong> {selectedFuel.fuelUnit}
            </p>
            <p>
              <strong>Cost per Unit:</strong> ₹ {selectedFuel.costPerUnit}
            </p>

            <div className="modal-actions">
              <button
                className="btn update"
                onClick={() =>
                  navigate(
                    `/dashboard/fuel/update/${selectedFuel.id}`
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

export default GetAllFuel;
