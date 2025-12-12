import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./shared/constants/routes";
import LoginPage from "./features/auth/pages/LoginPage";
import UnauthorizedPage from "./features/pages/UnauthorizedPage";
import ProtectedRoute from "./shared/components/ProtectedRoute";
import { AUTH_ROLE } from "./features/auth/constants/auth.constants";
import SuperAdminDashboard from "./features/superadmin/pages/SuperAdminDashboard";
import AdminDashboard from "./features/admin/pages/AdminDashboard";
import UserDashboard from "./features/user/pages/UserDashboard";

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      {/* Public routes */}
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.UNAUTHORIZED} element={<UnauthorizedPage />} />

                <Route
          path={ROUTES.SUPERADMIN_DASHBOARD}
          element={
            <ProtectedRoute allowedRoles={[AUTH_ROLE.SUPERADMIN]}>
              <SuperAdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin routes */}
        <Route
          path={ROUTES.ADMIN_DASHBOARD}
          element={
            <ProtectedRoute allowedRoles={[AUTH_ROLE.ADMIN, AUTH_ROLE.SUPERADMIN]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* User routes */}
        <Route
          path={ROUTES.USER_DASHBOARD}
          element={
            <ProtectedRoute allowedRoles={[AUTH_ROLE.USER, AUTH_ROLE.ADMIN, AUTH_ROLE.SUPERADMIN]}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        {/* Default redirect */}
        <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
    </Routes>
    </BrowserRouter>
  )
}