import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../features/auth/hooks/useAuth";
import { ROUTES } from "../constants/routes";
import type { UserRole } from "../../features/auth/constants/auth.constants";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

export default function ProtectedRoute({ 
  children, 
  allowedRoles 
}: ProtectedRouteProps) {
  const auth = useAuth();
  const location = useLocation();

  // Chưa đăng nhập -> redirect to login
  if (!auth.accessToken || !auth.user) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  // Đã đăng nhập nhưng không có quyền truy cập
  if (allowedRoles && !allowedRoles.includes(auth.user.role as UserRole)) {
    return <Navigate to={ROUTES.UNAUTHORIZED} replace />;
  }

  return <>{children}</>;
}