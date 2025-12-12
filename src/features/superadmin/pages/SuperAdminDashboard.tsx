import { useAuth } from "../../auth/hooks/useAuth";

export default function SuperAdminDashboard() {
  const auth = useAuth();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">SuperAdmin Dashboard</h1>
      <div className="bg-purple-100 p-4 rounded mb-4">
        <p>Welcome SuperAdmin: {auth.user?.username}</p>
        <p>🔥 Full system access</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-bold">System Settings</h3>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-bold">All Users</h3>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-bold">Logs</h3>
        </div>
      </div>
    </div>
  );
}