import { useNavigate } from "react-router-dom";
import SectionCard from "../../components/common/sectioncard.jsx";
import "../../styles/card.css";
import { Plus, Layers, List } from "lucide-react";

const Medicines = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 style={{ marginBottom: 24 }}>Medicines</h2>

      <div className="cards-grid">

        <SectionCard
          title="Create Medicine"
          description="Add a single medicine"
          icon={<Plus size={26} color="#0f766e" />}
          onClick={() => navigate("/dashboard/medicines/add")}
        />

        <SectionCard
          title="Create Medicine in Bulk"
          description="Add medicines in bulk"
          icon={<Layers size={26} color="#0f766e" />}
          onClick={() => navigate("/dashboard/medicines/bulk")}
        />

        <SectionCard
          title="Get All Medicines"
          description="View all medicines"
          icon={<List size={26} color="#0f766e" />}
          onClick={() => navigate("/dashboard/medicines/list")}
        />

      </div>
    </div>
  );
};

export default Medicines;
