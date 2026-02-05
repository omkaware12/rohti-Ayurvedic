import { useNavigate } from "react-router-dom";
import SectionCard from "../../components/common/sectioncard";
import { Plus, List } from "lucide-react";

const MedicineProcess = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 style={{ marginBottom: 24 }}>Medicine Process</h2>

      <div className="cards-grid">

        {/* CREATE PROCESS STEP */}
        <SectionCard
          title="Create Process Step"
          description="Add a new medicine process step"
          icon={<Plus size={26} color="#0f766e" />}
          onClick={() =>
            navigate("/dashboard/medicines/process/create")
          }
        />

        {/* GET ALL PROCESS STEPS */}
        <SectionCard
          title="Get All Process Steps"
          description="View all process steps"
          icon={<List size={26} color="#0f766e" />}
          onClick={() =>
            navigate("/dashboard/medicines/process/list")
          }
        />

      </div>
    </div>
  );
};

export default MedicineProcess;