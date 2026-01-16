import { useNavigate } from "react-router-dom";
import { Fuel, Users, Cog, Box  , BriefcaseMedical} from "lucide-react";
import "../styles/dashbaord.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-cards">
      <div
        className="dashboard-card"
        onClick={() => navigate("/Dashboard/fuel")}
      >
        <Fuel size={28} className="dashboard-icon" />
        <h3>Fuel</h3>
        <p>Manage fuel usage</p>
      </div>

      <div
        className="dashboard-card"
        onClick={() => navigate("/Dashboard/labour")}
      >
        <Users size={28} className="dashboard-icon" />
        <h3>Labour</h3>
        <p>Manage labour</p>
      </div>

      <div
        className="dashboard-card"
        onClick={() => navigate("/Dashboard/machines")}
      >
        <Cog size={28} className="dashboard-icon" />
        <h3>Machines</h3>
        <p>Manage machines</p>
      </div>

      <div
        className="dashboard-card"
        onClick={() => navigate("/Dashboard/raw-material")}
      >
        <Box size={28} className="dashboard-icon" />
        <h3>Raw Material</h3>
        <p>Manage materials</p>
      </div>
       <div
        className="dashboard-card"
        onClick={() => navigate("/Dashboard/Medicines")}
      >
        <BriefcaseMedical size={28} className="dashboard-icon" />
        <h3>Medicines</h3>
        <p>Manage Medicines</p>
      </div>
    </div>
  );
};

export default Dashboard;
