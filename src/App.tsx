import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./features/auth/components/LoginForm";
import ProtectedRoute from "./features/auth/routes/ProtectedRoute";
import AdminRoutes from "./features/admin/routes/AdminRoutes";

const App: React.FC = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<LoginForm />} />

      {/* Admin routes */}
      <Route path="/admin/*" element={<AdminRoutes />} />

      {/* User dashboard */}
      {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}

      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
