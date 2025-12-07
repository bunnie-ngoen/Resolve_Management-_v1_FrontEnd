import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import AdminDashboard from "../pages/AdminDashboard";
import UserManagement from "../pages/UserManagement";
import Settings from "../pages/Settings";
import ProtectedRoute from "../../auth/routes/ProtectedRoute";

const AdminRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute allowedRoles={['admin', 'superadmin']}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
