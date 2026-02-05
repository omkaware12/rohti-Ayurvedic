import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./createworkspace.css";

const CreateWorkspace = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [processName, setProcessName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Medicine ID:", id);
    console.log("Process Name:", processName);

    // 🔥 API CALL WILL GO HERE
    // POST /api/medicines/:id/workspace

    alert("Workspace created successfully!");
    navigate(-1);
  };

  return (
    <div className="workspace-page">
      <div className="workspace-card">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h3>Create Workspace</h3>

        <form className="workspace-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Process Name</label>
            <input
              type="text"
              placeholder="Enter process name"
              value={processName}
              onChange={(e) => setProcessName(e.target.value)}
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn submit">
              Create
            </button>
            <button
              type="button"
              className="btn cancel"
              onClick={() => navigate(-1)}
            >
              ✕
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateWorkspace;