import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, LoginResponse, LoginPayload } from "../types/auth.types";
import { storage } from "../../../utils/storage";

const initialState: AuthState = {
    user: null,
    accessToken: null,
    refreshToken: null,
    isAuth: false,
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest: (state, action: PayloadAction<LoginPayload>) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, _action: PayloadAction<LoginResponse>) => {
            state.user = _action.payload.user;
            state.accessToken = _action.payload.accessToken;
            state.refreshToken = _action.payload.refreshToken;
            state.isAuth = true;
            state.error = null;
            state.loading = false;
        },
        loginFailure: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.loading = false;
        },
        logout: (state) => {
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
            state.isAuth = false;
            storage.clearAll();
        },
        restoreAuth: (state) => {
            state.user = storage.getUser();
            state.accessToken = storage.getAccessToken();
            state.refreshToken = storage.getRefreshToken();
            state.isAuth = !!storage.getAccessToken();
        },
    }
})
export const { loginRequest, loginSuccess, loginFailure, logout,restoreAuth } = authSlice.actions;
export default authSlice.reducer;