import { useParams, useNavigate } from "react-router-dom";
import "./Transactionform.css";

const TransactionOutForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="form-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="form-card">
        <h2 className="form-title">OUT Transaction</h2>

        <p className="form-subtitle">
          Raw Material ID: <strong>{id}</strong>
        </p>

        <form>
          <div className="form-group">
            <label>Quantity</label>
            <input type="number" placeholder="Enter quantity" />
          </div>

          <button className="submit-btn">Submit OUT</button>
        </form>
      </div>
    </div>
  );
};

export default TransactionOutForm;
