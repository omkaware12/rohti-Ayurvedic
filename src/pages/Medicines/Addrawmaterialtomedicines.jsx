import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../styles/table.css";
import "../../styles/modal.css";

/* Dummy raw materials */
const RAW_MATERIALS = [
  { id: 1, name: "Ashwagandha" },
  { id: 2, name: "Giloy" },
  { id: 3, name: "Tulsi" },
  { id: 4, name: "Amla" },
  { id: 5, name: "Neem" },
];

const UNITS = ["MG", "G", "KG"];

/* Convert quantity to KG */
const toKg = (qty, unit) => {
  if (unit === "MG") return qty / 1_000_000;
  if (unit === "G") return qty / 1_000;
  return qty; // KG
};

const AddRawMaterial = () => {
  const { medicineId } = useParams();
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  /* Add to cart */
  const addToCart = (material) => {
    if (cart.find((item) => item.id === material.id)) return;

    setCart([
      ...cart,
      {
        ...material,
        quantity: 0,
        unit: "KG",
      },
    ]);
  };

  /* Remove */
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  /* Update quantity */
  const updateQuantity = (id, qty) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  /* Update unit */
  const updateUnit = (id, unit) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, unit } : item
      )
    );
  };

  /* Confirm */
  const handleConfirm = () => {
    if (cart.length === 0) {
      alert("Please add at least one raw material");
      return;
    }

    const payload = cart.map((item) => ({
      rawMaterialId: item.id,
      standardQuantity: Number(
        toKg(item.quantity, item.unit).toFixed(4)
      ),
    }));

    console.log(payload); // ✅ EXACT REQUIRED FORMAT

    alert("Raw materials attached successfully!");
    navigate(-1);
  };

  return (
    <div className="table-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2 className="page-title">
        Add Raw Materials (Medicine ID: {medicineId})
      </h2>

      {/* RAW MATERIAL LIST */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Raw Material</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {RAW_MATERIALS.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <button
                    className="btn update"
                    onClick={() => addToCart(item)}
                    disabled={cart.some((c) => c.id === item.id)}
                  >
                    {cart.some((c) => c.id === item.id)
                      ? "Added"
                      : "Add"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CART */}
      <h3 style={{ marginTop: "30px" }}>Selected Raw Materials</h3>

      {cart.length === 0 ? (
        <p>No raw materials added yet.</p>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Material</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>

                  <td>
                    <input
                      type="number"
                      step="0.0001"
                      min="0"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(
                          item.id,
                          Number(e.target.value)
                        )
                      }
                      style={{ width: "90px" }}
                    />
                  </td>

                  <td>
                    <select
                      value={item.unit}
                      onChange={(e) =>
                        updateUnit(item.id, e.target.value)
                      }
                    >
                      {UNITS.map((u) => (
                        <option key={u} value={u}>
                          {u}
                        </option>
                      ))}
                    </select>
                  </td>

                  <td>
                    <button
                      className="btn delete"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* CONFIRM */}
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <button className="btn workspace" onClick={handleConfirm}>
          Confirm Raw Materials
        </button>
      </div>
    </div>
  );
};

export default AddRawMaterial;