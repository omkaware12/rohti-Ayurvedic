import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import FactoryLoginSelection from "../pages/Factory-Login-selectionpage.jsx";
import AdminLogin from "../pages/AdminLogin.jsx";
import SupervisorLogin from "../pages/SpervisorLogin.jsx";
import ViewerLogin from "../pages/Viewer.jsx";
import ForgotPasswordPage from "../pages/forgotpassword.jsx";
import Otp from "../pages/otp.jsx";
import Profile from "../pages/profile.jsx";

import DashboardLayout from "../components/Layout/DashboardLayout.jsx";

/* ================= RAW MATERIAL ================= */
import RawMaterial from "../pages/RawMaterial/RawMaterial.jsx";
import AddRawMaterial from "../pages/RawMaterial/AddRawMaterial.jsx";
import BulkRawMaterial from "../pages/RawMaterial/bulkrawmaterial.jsx";
import GetAllRawMaterial from "../pages/RawMaterial/Getallrawmaterial.jsx";
import UpdateRawMaterial from "../pages/rawmaterial/updaterawmaterial.jsx";

/* ================= MEDICINES ================= */
import Medicines from "../pages/medicines/Medicines.jsx";
import AddMedicine from "../pages/medicines/Addmedicines.jsx";
import GetAllMedicines from "../pages/Medicines/GetAllmedicines.jsx";
import UpdateMedicine from "../pages/Medicines/updateMedicine.jsx";
import CreateWorkspace from "../pages/Medicines/createworkspace.jsx";
import AddRawMaterialToMedicines from "../pages/Medicines/Addrawmaterialtomedicines.jsx";
import AddMachinestoMedicines from "../pages/Medicines/addmachinestomedicines.jsx";

/* ================= MACHINES ================= */
import Machines from "../pages/Machines/Machines.jsx";
import AddMachine from "../pages/Machines/AddMachines.jsx";
import GetAllMachines from "../pages/Machines/GetAllMachines.jsx";
import UpdateMachine from "../pages/Machines/UpdateMachines.jsx";

/* ================= FUEL ================= */
import Fuel from "../pages/fuel/fuel.jsx";
import AddFuel from "../pages/fuel/AddFuel.jsx";
import GetAllFuel from "../pages/fuel/GetAllfuel.jsx";
import UpdateFuel from "../pages/fuel/UpdateFuel.jsx";

/* ================= TRANSACTIONS ================= */
import RawMaterialTransaction from "../pages/Transaction/transaction.jsx";
import RawMaterialTable from "../pages/Transaction/RawmaterialTable.jsx";
import TransactionInForm from "../pages/Transaction/transactionIn.jsx";
import TransactionOutForm from "../pages/Transaction/TransactionOut.jsx";
import GetAllTransactions from "../pages/Transaction/GetAllTransaction.jsx";


//  ======================process ========================//

import Process from "../pages/process/process.jsx"
import CreateProcess from "../pages/process/createmedicineprocessstep.jsx"
import GetAllProcessSteps from "../pages/process/getallprocessteps.jsx"



export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ========== PUBLIC ROUTES ========== */}
        <Route path="/" element={<Home />} />
        <Route path="/factory-login-selection" element={<FactoryLoginSelection />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/supervisor-login" element={<SupervisorLogin />} />
        <Route path="/viewer-login" element={<ViewerLogin />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/profile" element={<Profile/>}/>

        {/* ========== DASHBOARD LAYOUT ========== */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="rawmaterial" element={<RawMaterial />} />
          <Route path="medicines" element={<Medicines />} />
          <Route path="machines" element={<Machines />} />
          <Route path="fuel" element={<Fuel />} />
          <Route path="medicines-process" element={<Process/>}/>

          {/* 🔥 RAW MATERIAL TRANSACTION ENTRY */}
          <Route path="rawmaterial/transaction" element={<RawMaterialTransaction />} />
        </Route>

        {/* ========== RAW MATERIAL ========== */}
        <Route path="/dashboard/rawmaterial/add" element={<AddRawMaterial />} />
        <Route path="/dashboard/rawmaterial/bulk" element={<BulkRawMaterial />} />
        <Route path="/dashboard/rawmaterial/list" element={<GetAllRawMaterial />} />
        <Route path="/dashboard/transactions/update/:id" element={<UpdateRawMaterial />}/>

        {/* ========== MEDICINES ========== */}
        <Route path="/dashboard/medicines/add" element={<AddMedicine />} />
        <Route path="/dashboard/medicines/list" element={<GetAllMedicines />} />
        <Route path="/dashboard/medicines/update/:id" element={<UpdateMedicine />} />
        <Route path="/dashboard/medicines/workspace/:id" element={<CreateWorkspace />} />
        <Route path="/dashboard/medicines/:medicineId/add-raw-material" element={<AddRawMaterialToMedicines />}/>
        <Route path="/dashboard/medicines/:medicineId/add-machines"element={<AddMachinestoMedicines />}
/>

        {/* ========== MACHINES ========== */}
        <Route path="/dashboard/machines/add" element={<AddMachine />} />
        <Route path="/dashboard/machines/list" element={<GetAllMachines />} />
        <Route path="/dashboard/machines/update/:id" element={<UpdateMachine />} />

        {/* ========== FUEL ========== */}
        <Route path="/dashboard/fuel/add" element={<AddFuel />} />
        <Route path="/dashboard/fuel/list" element={<GetAllFuel />} />
        <Route path="/dashboard/fuel/update/:id" element={<UpdateFuel />} />

    
       {/* =============  medicine process ==============*/}

        <Route path="/dashboard/medicines/process/create" element={< CreateProcess/>} />
         <Route path="/dashboard/medicines/process/list" element={<GetAllProcessSteps/>} />




        {/* ========== TRANSACTION FLOW ========== */}
        <Route
          path="/dashboard/rawmaterial/transaction/select"
          element={<RawMaterialTable />}
        />

        <Route
          path="/dashboard/rawmaterial/transaction/in/:id"
          element={<TransactionInForm />}
        />

        <Route
          path="/dashboard/rawmaterial/transaction/out/:id"
          element={<TransactionOutForm />}
        />

        <Route
          path="/dashboard/rawmaterial/transaction/all"
          element={<GetAllTransactions />}
        />

      </Routes>
    </BrowserRouter>
  );
}
