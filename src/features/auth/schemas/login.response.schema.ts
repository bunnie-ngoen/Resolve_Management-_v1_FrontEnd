/**
 * Validate dữ liệu API sau khi backend trả response về cho frontend
 * Định nghĩa cấu trúc dữ liệu chuẩn cho User và LoginResponse
 * Cung cấp type cho TypeScript để đảm bảo code an toàn, hạn chế bug
 * Tránh lỗi API trả về sai format hoặc thiếu field
 */
import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  username: z.string(),
  email: z.string(),
  full_name: z.string().nullable(),
  avatar_url: z.string().nullable(),
  phone_number: z.string().nullable(),
  department_id: z.number().nullable(),
  is_email_verified: z.boolean(),
  last_login_at: z.string().nullable(),
  last_login_ip: z.string().nullable(),
  last_login_user_agent: z.string().nullable(),
  role: z.string(),
  status: z.string(),
});

export const LoginResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
    expiresIn: z.number(),
    user: UserSchema,
  }),
});

export type LoginResponse = z.infer<typeof LoginResponseSchema>;