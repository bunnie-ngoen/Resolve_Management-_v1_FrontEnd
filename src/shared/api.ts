/**
 * createApi : tạo api slice
 * fetchBaseQuery : wapper đơn giản của fetch, cho phép gửi request mà không cần axios
 * Rootstate : đại diện cho toàn bộ redux state
 */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../app/store';

export const api = createApi({
    reducerPath: 'api', //định danh reducer trong redux store
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
        credentials: "include", //cho phép gửi kèm cookie
        prepareHeaders: (headers, { getState }) => { //tự động thêm authorization token và tất cả request,hàm này sẽ chạy trước mỗi request
      // Tự động thêm accessToken vào mọi request
      const token = (getState() as RootState).auth.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    }),
    tagTypes: ["Dashboard"],
    endpoints: () => ({})
})