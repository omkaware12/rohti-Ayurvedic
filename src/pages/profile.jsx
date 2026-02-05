import { useState } from "react";
import "../styles/profile.css";

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: "Om",
    lastName: "Kaware",
    email: "omkaware@gmail.com",
    role: "CREATOR",
    position: "ADMIN",
  });

  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const updateField = (field, value) => {
    console.log(`Updating ${field}:`, value);
  };

  const updatePassword = () => {
    if (password.newPassword !== password.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Updating password:", password.newPassword);
  };

  return (
    <div className="profile-page">
      <div className="profile-card">

        {/* AVATAR */}
        <div className="avatar-section">
          <img
            src=""
            alt="avatar"
            className="avatar-img"
          />
          <label className="avatar-btn">
            Change Avatar
            <input type="file" hidden />
          </label>
        </div>

        {/* PROFILE */}
        <div className="section">
          <h3>Profile</h3>

          <div className="form-row">
            <div className="field">
              <label>First Name</label>
              <input
                value={profile.firstName}
                onChange={(e) =>
                  setProfile({ ...profile, firstName: e.target.value })
                }
              />
              <button
                className="btn black small"
                onClick={() => updateField("firstName", profile.firstName)}
              >
                Update
              </button>
            </div>

            <div className="field">
              <label>Last Name</label>
              <input
                value={profile.lastName}
                onChange={(e) =>
                  setProfile({ ...profile, lastName: e.target.value })
                }
              />
              <button
                className="btn black small"
                onClick={() => updateField("lastName", profile.lastName)}
              >
                Update
              </button>
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label>Role</label>
              <input value={profile.role} disabled />
            </div>

            <div className="field">
              <label>Position</label>
              <input value={profile.position} disabled />
            </div>
          </div>
        </div>

        {/* EMAIL */}
        <div className="section">
          <h3>Email</h3>
          <div className="field">
            <input
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
            />
            <button
              className="btn black small"
              onClick={() => updateField("email", profile.email)}
            >
              Update
            </button>
          </div>
        </div>

        {/* PASSWORD */}
        <div className="section">
          <h3>Change Password</h3>

          <div className="form-row">
            <div className="field">
              <input
                type="password"
                placeholder="New Password"
                onChange={(e) =>
                  setPassword({ ...password, newPassword: e.target.value })
                }
              />
            </div>

            <div className="field">
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={(e) =>
                  setPassword({ ...password, confirmPassword: e.target.value })
                }
              />
            </div>
          </div>

          <button className="btn black" onClick={updatePassword}>
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;