import { useRoleGuard } from "../../auth/hooks/useRoleGuard";
import { useAuth } from "../../auth/hooks/useAuth";

export default function AdminDashboard() {
  const auth = useAuth();
  const { isAdmin, isSuperAdmin } = useRoleGuard();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="bg-blue-100 p-4 rounded mb-4">
        <p>Welcome Admin: {auth.user?.username}</p>
        <p>Role: {auth.user?.role}</p>
      </div>

      {isSuperAdmin() && (
        <div className="bg-purple-100 p-4 rounded mb-4">
          <p>🔥 SuperAdmin Features</p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-bold">User Management</h3>
          <p>Quản lý users</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-bold">Settings</h3>
          <p>Cài đặt hệ thống</p>
        </div>
      </div>
    </div>
  );
}