import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/table.css";
import "../../styles/modal.css";

const ITEMS_PER_PAGE = 10;

/* 🔹 Dummy transaction material data */
const initialTransactions = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  materialName: `Raw Material ${i + 1}`,
  category: "HERB",
  quantity: 100 + i * 5,
  unit: "KG",
  supplier: "Ayurveda Supplier",
  description: "Used for manufacturing classical formulations",
}));

const GetAllTransactionMaterial = () => {
  const navigate = useNavigate();

  const [transactions, setTransactions] = useState(initialTransactions);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentData = transactions.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  /* 🔥 DELETE MATERIAL */
  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete this material?"))
      return;

    setTransactions((prev) =>
      prev.filter((m) => m.id !== selectedMaterial.id)
    );

    setSelectedMaterial(null);
  };

  return (
    <div className="table-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2 className="page-title">All Transaction Materials</h2>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Material Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Supplier</th>
            </tr>
          </thead>

          <tbody>
            {currentData.map((item, index) => (
              <tr
                key={item.id}
                className="clickable-row"
                onClick={() => setSelectedMaterial(item)}
              >
                <td>{startIndex + index + 1}</td>
                <td>{item.materialName}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>{item.unit}</td>
                <td>{item.supplier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINATION */}
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

      {/* 🔥 MATERIAL DETAILS MODAL */}
      {selectedMaterial && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button
              className="modal-close"
              onClick={() => setSelectedMaterial(null)}
            >
              ✕
            </button>

            <h3>{selectedMaterial.materialName}</h3>

            <div className="modal-details">
              <p>
                <strong>Category:</strong> {selectedMaterial.category}
              </p>
              <p>
                <strong>Quantity:</strong>{" "}
                {selectedMaterial.quantity} {selectedMaterial.unit}
              </p>
              <p>
                <strong>Supplier:</strong> {selectedMaterial.supplier}
              </p>
              <p>
                <strong>Description:</strong>
                <br />
                {selectedMaterial.description}
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="modal-actions">
              <button
                className="btn update"
                onClick={() =>
                  navigate(
                    `/dashboard/rawmaterial/update/${selectedMaterial.id}`
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

export default GetAllTransactionMaterial;