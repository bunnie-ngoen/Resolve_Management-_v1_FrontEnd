/**
 * hàm lấy dữ liệu từ redux store
 * selector : 
 * lấy đúng phần dữ liệu cần thiết
 * tránh components truy cập trực tiếp vào toàn bộ state
 * tối ưu performance
 * giảm logic trong components
 */
import type { RootState } from "../../../app/store";

export const selectAuth = (state : RootState) => state.auth;
export const selectIsLoggedIn = (state : RootState) => !!state.auth.accessToken;