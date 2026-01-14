// src/routes/AppRoutes.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import  Factoryloginselection from "../pages/Factory-Login-selectionpage.jsx"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/factory-login-selection" element={<Factoryloginselection />} />
      </Routes>
    </BrowserRouter>
  );
}
