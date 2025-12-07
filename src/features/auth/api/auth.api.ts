import api from "./axios.instance";
import type { LoginPayload,LoginResponse,TokenResponse } from "../types/auth.types";


export const loginService = async(payload : LoginPayload): Promise<LoginResponse> => {
   const res = await api.post('/auth/login',payload);
   return res.data.data;
}
export const refreshTokenService = async(refreshToken : string): Promise<TokenResponse> =>{
   const res = await api.post('/auth/refresh',{refreshToken});
   return res.data 
}
