import { useAuth } from "./useAuth";
import { AUTH_ROLE } from "../constants/auth.constants";
import type { UserRole } from "../constants/auth.constants";

export const useRoleGuard = () => {
  const auth = useAuth();

  const hasRole = (roles: UserRole[]): boolean => {
    if (!auth.user) return false;
    return roles.includes(auth.user.role as UserRole);
  };

  const isAdmin = (): boolean => {
    return hasRole([AUTH_ROLE.ADMIN, AUTH_ROLE.SUPERADMIN]);
  };

  const isSuperAdmin = (): boolean => {
    return hasRole([AUTH_ROLE.SUPERADMIN]);
  };

  const isUser = (): boolean => {
    return hasRole([AUTH_ROLE.USER]);
  };

  const canAccess = (requiredRoles: UserRole[]): boolean => {
    return hasRole(requiredRoles);
  };

  return {
    hasRole,
    isAdmin,
    isSuperAdmin,
    isUser,
    canAccess,
    currentRole: auth.user?.role as UserRole,
  };
};