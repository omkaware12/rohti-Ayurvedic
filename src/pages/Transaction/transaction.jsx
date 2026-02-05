import { useNavigate } from "react-router-dom";
import SectionCard from "../../components/common/sectioncard";
import { Repeat, List } from "lucide-react";

const RawMaterialTransaction = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Raw Material Transaction</h2>

      <div className="cards-grid">
        <SectionCard
          title="Transaction (IN / OUT)"
          description="Add or consume raw material"
          icon={<Repeat size={28} />}
          onClick={() =>
            navigate("/dashboard/rawmaterial/transaction/select")
          }
        />

        <SectionCard
          title="Get All Transactions"
          description="View transaction history"
          icon={<List size={28} />}
          onClick={() =>
            navigate("/dashboard/rawmaterial/transaction/all")
          }
        />
      </div>
    </div>
  );
};

export default RawMaterialTransaction;
