import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import FactoryLoginSelection from "../pages/Factory-Login-selectionpage.jsx";
import AdminLogin from "../pages/AdminLogin.jsx";
import SupervisorLogin from "../pages/SpervisorLogin.jsx";
import ViewerLogin from "../pages/Viewer.jsx";
import ForgotPasswordPage from "../pages/forgotpassword.jsx";
import Otp from "../pages/otp.jsx";

import DashboardLayout from "../components/DashbaordLayout/Dashboard/DashbaordLayout.jsx";
import Dashboard from "../pages/Dashboard.jsx";

// FULL PAGE FORMS
import Fuel from "../components/Dashboard/fuel.jsx";
import Labour from "../components/Dashboard/laboure.jsx";
import Machines from "../components/Dashboard/machines.jsx";
import RawMaterial from "../components/Dashboard/rawmaterial.jsx";
import Medicines from "../components/Dashboard/Medicine.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/factory-login-selection" element={<FactoryLoginSelection />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/supervisor-login" element={<SupervisorLogin />} />
        <Route path="/viewer-login" element={<ViewerLogin />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/otp" element={<Otp />} />

        {/* Dashboard layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
        </Route>

        {/* FULL PAGE FORMS (NO DASHBOARD LAYOUT) */}
        <Route path="/Dashboard/fuel" element={<Fuel />} />
        <Route path="/Dashboard/labour" element={<Labour />} />
        <Route path="/Dashboard/machines" element={<Machines />} />
        <Route path="/Dashboard/raw-material" element={<RawMaterial />} />
        <Route path="/Dashboard/Medicines" element={<Medicines/>}> </Route>

      </Routes>
    </BrowserRouter>
  );
}
