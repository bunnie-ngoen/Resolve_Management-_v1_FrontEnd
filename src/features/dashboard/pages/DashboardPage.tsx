// src/features/dashboard/pages/DashboardPage.tsx
import { useAuth } from "../../auth/hooks/useAuth";
import { useAppDispatch } from "../../../app/hook";
import { logout } from "../../auth/slices/auth.slice";
import { storage } from "../../../shared/libs/storage";
import { STORAGE_KEYS } from "../../../shared/constants/storage-keys";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../shared/constants/routes";

export default function DashboardPage() {
  const auth = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear Redux store
    dispatch(logout());
    
    // Clear localStorage
    storage.remove(STORAGE_KEYS.ACCESS_TOKEN);
    storage.remove(STORAGE_KEYS.USER);
    
    // Navigate to login
    navigate(ROUTES.LOGIN);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p>Welcome, {auth.user?.username}!</p>
        <p>Email: {auth.user?.email}</p>
        <p>Role: {auth.user?.role}</p>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}