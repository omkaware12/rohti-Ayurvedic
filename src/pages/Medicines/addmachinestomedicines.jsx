import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../styles/table.css";
import "../../styles/modal.css";

/* Dummy Machines (later replace with API) */
const MACHINES = [
  { id: 1, name: "Pulverizer Machine", type: "Grinding" },
  { id: 2, name: "Mixer Machine", type: "Mixing" },
  { id: 3, name: "Tablet Press", type: "Compression" },
  { id: 4, name: "Dryer", type: "Drying" },
  { id: 5, name: "Coating Machine", type: "Coating" },
];

const AddMachines = () => {
  const { medicineId } = useParams();
  const navigate = useNavigate();

  const [selectedMachines, setSelectedMachines] = useState([]);

  /* Add machine */
  const addMachine = (machine) => {
    if (selectedMachines.find((m) => m.id === machine.id)) return;

    setSelectedMachines([
      ...selectedMachines,
      { ...machine, usageTime: 0 },
    ]);
  };

  /* Remove machine */
  const removeMachine = (id) => {
    setSelectedMachines(
      selectedMachines.filter((m) => m.id !== id)
    );
  };

  /* Update usage time (hours) */
  const updateUsageTime = (id, time) => {
    setSelectedMachines(
      selectedMachines.map((m) =>
        m.id === id ? { ...m, usageTime: time } : m
      )
    );
  };

  /* Confirm */
  const handleConfirm = () => {
    if (selectedMachines.length === 0) {
      alert("Please add at least one machine");
      return;
    }

    // 🔥 Backend-ready payload
    const payload = selectedMachines.map((m) => ({
      machineId: m.id,
      usageTime: m.usageTime, // in hours
    }));

    console.log("Medicine ID:", medicineId);
    console.log("Attached Machines:", payload);

    alert("Machines attached successfully!");
    navigate(-1);
  };

  return (
    <div className="table-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2 className="page-title">
        Add Machines (Medicine ID: {medicineId})
      </h2>

      {/* MACHINE LIST */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Machine Name</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {MACHINES.map((machine, index) => (
              <tr key={machine.id}>
                <td>{index + 1}</td>
                <td>{machine.name}</td>
                <td>{machine.type}</td>
                <td>
                  <button
                    className="btn update"
                    onClick={() => addMachine(machine)}
                    disabled={selectedMachines.some(
                      (m) => m.id === machine.id
                    )}
                  >
                    {selectedMachines.some(
                      (m) => m.id === machine.id
                    )
                      ? "Added"
                      : "Add"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* SELECTED MACHINES */}
      <h3 style={{ marginTop: "30px" }}>Selected Machines</h3>

      {selectedMachines.length === 0 ? (
        <p>No machines added yet.</p>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Machine</th>
                <th>Usage Time (hrs)</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {selectedMachines.map((machine) => (
                <tr key={machine.id}>
                  <td>{machine.name}</td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      step="0.5"
                      value={machine.usageTime}
                      onChange={(e) =>
                        updateUsageTime(
                          machine.id,
                          Number(e.target.value)
                        )
                      }
                      style={{ width: "80px" }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn delete"
                      onClick={() =>
                        removeMachine(machine.id)
                      }
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
          Confirm Machines
        </button>
      </div>
    </div>
  );
};

export default AddMachines;