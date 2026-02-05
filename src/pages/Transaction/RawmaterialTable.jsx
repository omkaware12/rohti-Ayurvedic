import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/table.css";
import "../../styles/modal.css";

const ITEMS_PER_PAGE = 10;

const rawMaterialsData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Raw Material ${i + 1}`,
}));

const RawMaterialTable = () => {
  const navigate = useNavigate();
  const [rawMaterials, setRawMaterials] = useState(rawMaterialsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const totalPages = Math.ceil(rawMaterials.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentData = rawMaterials.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="table-page">
      {/* Back */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2 className="page-title">Raw Materials</h2>

      {/* Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Raw Material Name</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((rm, i) => (
              <tr
                key={rm.id}
                className="clickable-row"
                onClick={() => setSelectedMaterial(rm)}
              >
                <td>{startIndex + i + 1}</td>
                <td>{rm.name}</td>
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
      {selectedMaterial && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button
              className="modal-close"
              onClick={() => setSelectedMaterial(null)}
            >
              ✕
            </button>

            <h3>{selectedMaterial.name}</h3>

            <div className="modal-actions">
              <button
                className="btn update"
                onClick={() =>
                  navigate(
                    `/dashboard/rawmaterial/transaction/in/${selectedMaterial.id}`
                  )
                }
              >
                IN
              </button>

              <button
                className="btn delete"
                onClick={() =>
                  navigate(
                    `/dashboard/rawmaterial/transaction/out/${selectedMaterial.id}`
                  )
                }
              >
                OUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RawMaterialTable;
