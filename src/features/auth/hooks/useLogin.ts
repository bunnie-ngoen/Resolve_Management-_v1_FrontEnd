import { useDispatch, useSelector } from "react-redux"
import { selectAuthError, selectAuthLoading, selectUser } from "../slice/auth.selector";
import type { LoginPayload } from "../types/auth.types";
import { loginRequest } from "../slice/auth.slice";
import type { UseLoginReturn } from "../types/auth.types";

export const useLogin = () : UseLoginReturn=>{
    const dispatch = useDispatch();
    const loading = useSelector(selectAuthLoading);
    const error = useSelector(selectAuthError);
    const user = useSelector(selectUser);

    const login = (payload : LoginPayload)=>{
        dispatch(loginRequest(payload));
    }
    return {login,loading,error,user};
}