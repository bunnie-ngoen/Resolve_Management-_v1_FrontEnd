import { z } from "zod";

export const DashboardStatsSchema = z.object({
  users: z.object({
    total: z.number(),
    active: z.number(),
  }),
  posts: z.object({
    total: z.number(),
  }),
  comments: z.object({
    total: z.number(),
  }),
  security: z.object({
    failedLoginsToday: z.number(),
  }),
});

export type DashboardStats = z.infer<typeof DashboardStatsSchema>;
