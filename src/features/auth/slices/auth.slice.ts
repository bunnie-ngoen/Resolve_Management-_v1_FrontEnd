/**
 * quản lý trạng thái xác thực
 * action.payload: dữ liệu mới { accessToken, user }
 */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "../types/auth.type";

const initialState : AuthState ={
    accessToken : null,
    user : null
}

export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers:{
        setAuth(state,action : PayloadAction<AuthState>){
            return{...state,...action.payload}
        },
        logout(){
            return initialState;
        }
    }
});
export const {setAuth, logout } = authSlice.actions;
export default authSlice.reducer;