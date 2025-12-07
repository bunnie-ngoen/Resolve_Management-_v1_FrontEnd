
export interface LoginPayload {
    email : string , 
    password : string,
}

export type UserRole = 'superadmin' | 'admin' | 'morderator' |'user' | 'guest';
export type UserStatus = 'active' | 'inactive' | 'suspended' | 'locked'

export interface User {
  id : number,
  email : string ,
  username : string , 
  full_name : string,
  avatar_url? : string |null,
  role : UserRole,
  status : UserStatus,
  is_email_verified : boolean,
  department_id? : number | null,
}

export interface TokenResponse {
    accessToken : string,
    refreshToken : string,
    expiresIn : number,
}

export interface LoginResponse extends TokenResponse{
    user : User;
}

export interface AuthState {
    user : User | null,
    accessToken : string | null,
    refreshToken : string | null ,
    isAuth : boolean,
    loading : boolean,
    error : string | null  
}

export interface UseLoginReturn {
  login: (payload: LoginPayload) => void;
  loading: boolean;
  error: string | null;
  user : User | null;
}

