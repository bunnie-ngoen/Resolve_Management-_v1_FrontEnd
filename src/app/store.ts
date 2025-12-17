/**
 * khởi tạo Redux store cho ứng dụng
 * [api.reducerPath]: api.reducer = quản lý cache, trạng thái query của RTK Query.
 */
import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/slices/auth.slice';
import { api } from "../shared/api";

export const store = configureStore({
    reducer:{
        auth : authReducer,
        [api.reducerPath] :api.reducer,
    },
    middleware : (getDefault) => getDefault().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;