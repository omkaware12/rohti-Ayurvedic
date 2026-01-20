import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "../../styles/table.css";

const ITEMS_PER_PAGE = 10;

// ✅ Dummy data
const DUMMY_RAW_MATERIALS = Array.from({ length: 35 }, (_, i) => ({
  rawMaterialName: `Raw Material ${i + 1}`,
  rawMaterialType: "HERB",
  rawMaterialUnit: "KG",
}));

const AllRawMaterial = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    DUMMY_RAW_MATERIALS.length / ITEMS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = DUMMY_RAW_MATERIALS.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="table-page">
      {/* HEADER */}
      <div className="table-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={18} />
          Back
        </button>

        <h2 className="page-title">All Raw Materials</h2>
      </div>

      {/* TABLE */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Raw Material Name</th>
              <th>Type</th>
              <th>Unit</th>
            </tr>
          </thead>

          <tbody>
            {currentData.map((item, index) => (
              <tr key={startIndex + index}>
                <td>{startIndex + index + 1}</td>
                <td>{item.rawMaterialName}</td>
                <td>{item.rawMaterialType}</td>
                <td>{item.rawMaterialUnit}</td>
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
    </div>
  );
};

export default AllRawMaterial;
