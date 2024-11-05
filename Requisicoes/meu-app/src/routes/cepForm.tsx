// src/routes/AppRoutes.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CepForm from "../pages/cepForm";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CepForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
