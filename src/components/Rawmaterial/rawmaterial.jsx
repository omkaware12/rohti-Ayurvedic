import { useNavigate } from "react-router-dom";
import "./card.css";

const RawMaterialCards = () => {
  const navigate = useNavigate();

  return (
    <div className="card-container">
      <div
        className="card"
        onClick={() => navigate("/dashboard/rawmaterial/add")}
      >
        <h3>Add Raw Material</h3>
        <p>Create new raw material</p>
      </div>
    </div>
  );
};

export default RawMaterialCards;
