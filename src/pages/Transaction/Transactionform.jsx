import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../styles/form.css";

const TransactionForm = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const transactionType = searchParams.get("type"); // IN or OUT

  const [formData, setFormData] = useState({
    rawMaterialId: Number(id),
    transactionType,
    quantity: "",
    pricePerUnit: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload =
      transactionType === "IN"
        ? formData
        : {
            rawMaterialId: formData.rawMaterialId,
            transactionType: "OUT",
            quantity: formData.quantity,
          };

    console.log("Transaction Payload:", payload);
    alert("Transaction successful");
    navigate(-1);
  };

  return (
    <div className="form-page">
      <h2>{transactionType} Raw Material</h2>

      <form className="form-card" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        {transactionType === "IN" && (
          <div className="form-group">
            <label>Price Per Unit</label>
            <input
              type="number"
              name="pricePerUnit"
              value={formData.pricePerUnit}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <button className="submit-btn">
          Submit {transactionType}
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
