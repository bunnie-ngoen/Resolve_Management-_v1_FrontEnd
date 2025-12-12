export const AUTH_ROLE ={
    ADMIN : 'admin',
    SUPERADMIN :'superadmin',
    USER : 'user'
} as const;

//tạo type cho role
export type UserRole = typeof AUTH_ROLE[keyof typeof AUTH_ROLE];

// Định nghĩa quyền truy cập cho từng role
/**
 * as const giúp:
array là readonly tuple
mỗi string là literal type
tránh bị thay đổi giá trị ở runtime
 */
export const ROLE_PERMISSIONS = {
  [AUTH_ROLE.SUPERADMIN]: [
    "/superadmin/*",
    "/admin/*",
    "/user/*",
  ],
  [AUTH_ROLE.ADMIN]: [
    "/admin/*",
    "/user/*",
  ],
  [AUTH_ROLE.USER]: [
    "/user/*",
  ],
} as const;