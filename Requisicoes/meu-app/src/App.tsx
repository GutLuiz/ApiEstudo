// src/App.tsx
import React from "react";
import AppRoutes from "./routes/cepForm";

const App: React.FC = () => {
  return (
    <div>
      <h2>Consulta de CEP</h2>
      <AppRoutes />
    </div>
  );
};

export default App;
