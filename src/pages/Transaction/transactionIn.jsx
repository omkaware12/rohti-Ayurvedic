import { useParams, useNavigate } from "react-router-dom";
import "./transactionform.css";

const TransactionInForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="form-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="form-card">
        <h2 className="form-title">IN Transaction</h2>

        <p className="form-subtitle">
          Raw Material ID: <strong>{id}</strong>
        </p>

        <form>
          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              placeholder="Enter quantity"
            />
          </div>

          <div className="form-group">
            <label>Price per Unit</label>
            <input
              type="number"
              step="0.01"
              placeholder="Enter price per unit"
            />
          </div>

          <button className="submit-btn">Submit IN</button>
        </form>
      </div>
    </div>
  );
};

export default TransactionInForm;
