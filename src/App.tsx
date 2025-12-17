import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { ROUTES } from "./shared/constants/routes";
import LoginPage from "./features/auth/pages/LoginPage";
import UnauthorizedPage from "./features/pages/UnauthorizedPage";
import ProtectedRoute from "./shared/components/ProtectedRoute";
import { AUTH_ROLE } from "./features/auth/constants/auth.constants";
import { adminRoutes } from "./features/admin/admin.routes";

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public routes */}
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.UNAUTHORIZED} element={<UnauthorizedPage />} />

          {/* Admin nested routes */}
          {adminRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <ProtectedRoute allowedRoles={[AUTH_ROLE.ADMIN, AUTH_ROLE.SUPERADMIN]}>
                  {route.element}
                </ProtectedRoute>
              }
            >
              {route.children?.map((child, idx) => (
                <Route
                  key={idx}
                  path={child.path}
                  index={child.index || undefined}
                  element={child.element}
                />
              ))}
            </Route>
          ))}
          {/* Default redirect */}
          <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
