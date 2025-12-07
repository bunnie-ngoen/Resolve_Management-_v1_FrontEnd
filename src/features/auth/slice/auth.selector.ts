import type { RootState } from '../../../store';

/**
 * Giúp truy xuất dữ liệu trong slice auth
 * @param state 
 * @returns 
 */
export const selectAuth = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectAuthLoading = (state: RootState) => state.auth.loading;
export const selectAuthError = (state: RootState) => state.auth.error;
