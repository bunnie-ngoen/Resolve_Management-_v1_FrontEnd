import { api } from "../../../shared/api";
import type { ApiResponse } from "../../../shared/types/api";
import {
  DashboardStatsSchema,
  type DashboardStats,
} from "../schemas/dashboard.schema";

export const dashboardApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStats: builder.query<DashboardStats, void>({
      query: () => "/admin/dashboard/stats",
      transformResponse: (response: ApiResponse<DashboardStats>) => {
        return DashboardStatsSchema.parse(response.data);
      },
      providesTags: ["Dashboard"],
    }),
  }),
});

export const { useGetDashboardStatsQuery } = dashboardApi;
