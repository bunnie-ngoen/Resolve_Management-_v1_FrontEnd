import { da } from "zod/v4/locales";
import { useGetDashboardStatsQuery } from "../api/dashboard.api";
import { Dashboard } from "../domain/dashboard.domain";

export default function DashboardPage() {
  const { data, isLoading, error } = useGetDashboardStatsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Error loading dashboard</p>;

  const dashboard = new Dashboard(data);
  console.log(dashboard)

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="card">
        <h3>Total Users</h3>
        <p>{dashboard.stats.users.total}</p>
      </div>

      <div className="card">
        <h3>Active Users</h3>
        <p>{dashboard.stats.users.active}</p>
      </div>

      <div className="card">
        <h3>Active Rate</h3>
        <p>{dashboard.activeUserRate}%</p>
      </div>

      <div className="card">
        <h3>Failed logins today</h3>
        <p>{dashboard.stats.security.failedLoginsToday}</p>
      </div>
    </div>
  );
}
