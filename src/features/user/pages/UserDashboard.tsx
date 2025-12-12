import { useAuth } from "../../auth/hooks/useAuth";

export default function UserDashboard() {
  const auth = useAuth();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
      <div className="bg-green-100 p-4 rounded mb-4">
        <p>Welcome: {auth.user?.username}</p>
        <p>Email: {auth.user?.email}</p>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h3 className="font-bold mb-2">Your Profile</h3>
        <p>Thông tin cá nhân của bạn</p>
      </div>
    </div>
  );
}