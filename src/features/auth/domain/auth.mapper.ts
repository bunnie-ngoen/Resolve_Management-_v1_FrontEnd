/**
 * Chuyển đổi dữ liệu từ dạng API response sang dạng bạn muốn dùng trong ứng dụng (AuthEntity).
 * Nó dùng để tách layer API (response) ra khỏi layer internal model (entity).
 */
import type { LoginResponse } from "../schemas/login.response.schema";
import type { AuthEntity } from "./auth.entity";

export const mapLoginResponseToAuth = (data: LoginResponse["data"]): AuthEntity => ({
  accessToken: data.accessToken,
  user: {
    id: data.user.id,
    username: data.user.username,
    email: data.user.email,
    role: data.user.role,
  },
});