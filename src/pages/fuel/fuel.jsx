import { useNavigate } from "react-router-dom";
import SectionCard from "../../components/common/sectioncard.jsx";
import { Plus, List } from "lucide-react";
import "../../styles/card.css";

const Fuel = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 style={{ marginBottom: 24 }}>Fuel</h2>

      <div className="cards-grid">
        <SectionCard
          title="Create Fuel"
          description="Add fuel entry"
          icon={<Plus size={26} />}
          onClick={() => navigate("/dashboard/fuel/add")}
        />

        <SectionCard
          title="Get All Fuel"
          description="View fuel records"
          icon={<List size={26} />}
          onClick={() => navigate("/dashboard/fuel/list")}
        />
      </div>
    </div>
  );
};

export default Fuel;
