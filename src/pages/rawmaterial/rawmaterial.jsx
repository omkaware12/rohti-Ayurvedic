import { useNavigate } from "react-router-dom";
import {
  PlusCircle,
  Layers,
  List
} from "lucide-react";

import SectionCard from "../../components/common/SectionCard";
import "../../styles/card.css";

const RawMaterial = () => {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <h2 className="page-title">Raw Material</h2>

      <div className="cards-grid">

        <SectionCard
          title="Create Raw Material"
          description="Add a single raw material"
          icon={<PlusCircle size={26} />}
          onClick={() => navigate("/dashboard/rawmaterial/add")}
        />

        <SectionCard
          title="Create Raw Material in Bulk"
          description="Add multiple raw materials"
          icon={<Layers size={26} />}
          onClick={() => navigate("/dashboard/rawmaterial/bulk")}
        />

        <SectionCard
          title="Show All Raw Materials"
          description="View & manage raw materials"
          icon={<List size={26} />}
          onClick={() => navigate("/dashboard/rawmaterial/list")}
        />

      </div>
    </div>
  );
};

export default RawMaterial;
