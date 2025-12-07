import type React from "react";
import { useSelector } from "react-redux";
import { selectUser, selectAuthLoading } from "../slice/auth.selector";
import { Navigate } from "react-router-dom";

interface Props {
    children: React.ReactNode;
    allowedRoles?: string[];
}

const ProtectedRoute: React.FC<Props> = ({ children, allowedRoles }) => {
    const user = useSelector(selectUser);
    const loading = useSelector(selectAuthLoading);

    // Nếu đang loading, render null hoặc spinner
    if (loading) return null; // hoặc <LoadingSpinner />

    if (!user) return <Navigate to="/login" replace />;

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
