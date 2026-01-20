import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import FactoryLoginSelection from "../pages/Factory-Login-selectionpage.jsx";
import AdminLogin from "../pages/AdminLogin.jsx";
import SupervisorLogin from "../pages/SpervisorLogin.jsx";
import ViewerLogin from "../pages/Viewer.jsx";
import ForgotPasswordPage from "../pages/forgotpassword.jsx";
import Otp from "../pages/otp.jsx";

import DashboardLayout from "../components/Layout/DashboardLayout.jsx";

// RAW MATERIAL
import RawMaterial from "../pages/RawMaterial/RawMaterial.jsx";
import AddRawMaterial from "../pages/RawMaterial/AddRawMaterial.jsx";
import BulkRawMaterial from "../pages/RawMaterial/bulkrawmaterial.jsx";
import GetAllRawMaterial from "../pages/RawMaterial/Getallrawmaterial.jsx";

// MEDICINES
import Medicines from "../pages/medicines/Medicines.jsx";
import AddMedicine from "../pages/medicines/Addmedicines.jsx";
import GetAllmedicines from "../pages/Medicines/GetAllmedicines.jsx";
import UpdateMedicine from "../pages/Medicines/updateMedicine.jsx";


// Machines

import Machines from "../pages/Machines/Machines.jsx";
import AddMachine from "../pages/Machines/AddMachines.jsx";
import GetAllMachines from "../pages/Machines/GetAllMachines.jsx";
import UpdateMachine from "../pages/Machines/UpdateMachines.jsx";

// FUEL

import Fuel from "../pages/fuel/fuel.jsx";
import AddFuel from "../pages/fuel/AddFuel.jsx";
import GetAllFuel from "../pages/fuel/GetAllfuel.jsx";
import UpdateFuel from "../pages/fuel/UpdateFuel.jsx";



export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/" element={<Home />} />
        <Route
          path="/factory-login-selection"
          element={<FactoryLoginSelection />}
        />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/supervisor-login" element={<SupervisorLogin />} />
        <Route path="/viewer-login" element={<ViewerLogin />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/otp" element={<Otp />} />

        {/* ================= DASHBOARD (WITH SIDEBAR + HEADER) ================= */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="rawmaterial" element={<RawMaterial />} />
          <Route path="medicines" element={<Medicines />} />
          <Route path="machines" element={<Machines />} />
           <Route path="fuel" element={<Fuel />} />
        </Route>

        {/* ================= RAW MATERIAL (NO LAYOUT) ================= */}
        <Route
          path="/dashboard/rawmaterial/add"
          element={<AddRawMaterial />}
        />
        <Route
          path="/dashboard/rawmaterial/bulk"
          element={<BulkRawMaterial />}
        />
        <Route
          path="/dashboard/rawmaterial/list"
          element={<GetAllRawMaterial />}
        />

        {/* ================= MEDICINES (NO LAYOUT) ================= */}
        <Route
          path="/dashboard/medicines/add"
          element={<AddMedicine />}
        />
       
         <Route
          path="/dashboard/medicines/list"
          element={<GetAllmedicines />}
        />
            <Route
             path="/dashboard/medicines/update/:id"
            element={<UpdateMedicine />}
          />

       {/* MACHINES WITHOUT LAYOUT */}
        <Route path="/dashboard/machines/add" element={<AddMachine />} />
        <Route path="/dashboard/machines/list" element={<GetAllMachines />} />
        <Route
         path="/dashboard/machines/update/:id"
          element={<UpdateMachine />}
        />

        {/* FUEL WITHOUT LAYOUT */}
        <Route path="/dashboard/fuel/add" element={<AddFuel />} />
       <Route path="/dashboard/fuel/list" element={<GetAllFuel />} />
       <Route path="/dashboard/fuel/update/:id" element={<UpdateFuel />} />

        
      </Routes>
    </BrowserRouter>
  );
}
