import { useNavigate } from "react-router-dom";
import SectionCard from "../../components/common/sectioncard";
import "../../styles/card.css";
import { Plus, List } from "lucide-react";

const Machines = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 style={{ marginBottom: 24 }}>Machines</h2>

      <div className="cards-grid">
        <SectionCard
          title="Create Machine"
          description="Add a new machine"
          icon={<Plus size={26} color="#0f766e" />}
          onClick={() => navigate("/dashboard/machines/add")}
        />

        <SectionCard
          title="Get All Machines"
          description="View all machines"
          icon={<List size={26} color="#0f766e" />}
          onClick={() => navigate("/dashboard/machines/list")}
        />
      </div>
    </div>
  );
};

export default Machines;
