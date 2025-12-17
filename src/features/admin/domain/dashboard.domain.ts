import type { DashboardStats } from "../schemas/dashboard.schema";

export class Dashboard {
  public readonly stats: DashboardStats;

  constructor(stats: DashboardStats) {
    this.stats = stats;
  }

  get activeUserRate() {
    const { total, active } = this.stats.users;
    return total === 0 ? 0 : Math.round((active / total) * 100);
  }
}
