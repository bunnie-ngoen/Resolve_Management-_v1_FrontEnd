import { AUTH_TOKEN_KEY,AUTH_REFRESH_TOKEN_KEY,AUTH_USER_KEY } from "../constants/auth.constants";
import type { User } from "../features/auth/types/auth.types";
export const storage ={
    setAccessToken :(token :string) =>localStorage.setItem(AUTH_TOKEN_KEY,token),
    getAccessToken : () =>localStorage.getItem(AUTH_TOKEN_KEY),
    removeAccessToken : () => localStorage.removeItem(AUTH_TOKEN_KEY),

    setRefreshToken : (token : string) => localStorage.setItem(AUTH_REFRESH_TOKEN_KEY,token),
    getRefreshToken : ()=> localStorage.getItem(AUTH_REFRESH_TOKEN_KEY),
    removeRefreshToken : () => localStorage.removeItem(AUTH_REFRESH_TOKEN_KEY),

   // User
  setUser: (user: User) => localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user)),
  getUser: (): User | null => {
    const user = localStorage.getItem(AUTH_USER_KEY);
    return user ? JSON.parse(user) : null;
  },
  removeUser: () => localStorage.removeItem(AUTH_USER_KEY),

  // Clear All
  clearAll: () => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_REFRESH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
  }
}