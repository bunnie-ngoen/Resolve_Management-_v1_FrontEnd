import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../app/hook";
import { useLoginMutation } from "../api/auth.api";
import { loginSchema } from "../schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { LoginFormValues } from "../schemas/login.schema";
import { mapLoginResponseToAuth } from "../domain/auth.mapper";
import { setAuth } from "../slices/auth.slice";
import { useNavigate } from "react-router-dom";
import { storage } from "../../../shared/libs/storage";
import { STORAGE_KEYS } from "../../../shared/constants/storage-keys";
import { ROUTES } from "../../../shared/constants/routes";
import { AUTH_ROLE } from "../constants/auth.constants";
import {default as logo} from '../../../assets/images/logo.webp'
import {default as face} from '../../../assets/images/facebook.png'
export default function LoginForm() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginMutation();

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        mode : "onChange"
    });

    const onSubmit = async (values: LoginFormValues) => {
        try {
            const res = await login(values).unwrap(); //unwrap : là biến của mutation/query thành 1 promise bình thường kiểu try/catch
            const authEntity = mapLoginResponseToAuth(res.data);
            dispatch(setAuth(authEntity)); //gọi action set auth để lưu authEntity dô redux
            //sau khi lưu rồi thì lưu accesstoken và trong localstorae
            storage.set(STORAGE_KEYS.ACCESS_TOKEN, authEntity.accessToken);
            storage.set(STORAGE_KEYS.USER, authEntity.user);
            //check role để navigate đến đúng page
            switch (authEntity.user.role) {
                case AUTH_ROLE.SUPERADMIN:
                    navigate(ROUTES.SUPERADMIN_DASHBOARD);
                    break;
                case AUTH_ROLE.ADMIN:
                    navigate(ROUTES.ADMIN_DASHBOARD);
                    break;
                case AUTH_ROLE.USER:
                    navigate(ROUTES.USER_DASHBOARD);
                    break;
                default:
                    navigate(ROUTES.LOGIN);
            }
        } catch (error) {
            console.log("login failed", error)
        }
    }

    return (
        <div className="flex w-full h-screen items-center justify-center">
            <div className="w-[80%] flex justify-center h-screen items-center">
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl font-bold pb-4">SIGN IN</h1>
                        <input
                            {...form.register("email")}
                            placeholder="Email"
                            className="p-3 w-full bg-gray-100 rounded-sm"
                            type="text" />
                        {form.formState.errors.email && (
                            <p className="text-red-500">{form.formState.errors.email.message}</p>
                        )} 
                        <input
                            {...form.register("password")}
                            placeholder="Password"
                            className="p-3 w-full bg-gray-100 rounded-sm"
                            type="text" />
                             {form.formState.errors.password && (
                            <p className="text-red-500">{form.formState.errors.password.message}</p>
                        )}
                        <div>
                            <h1 className="float-right">
                               <a href="">Forget Password?</a>
                            </h1>
                        </div>

                        <button type="submit" className="bg-green-600 text-white p-3 rounded w-full hover:bg-green-700 transition"
                            disabled={isLoading}>
                            {isLoading ? "Loading..." : "Login"}
                        </button>
                        <button type="submit" className="border text-black p-3 rounded w-full flex items-center justify-center gap-2"
                           >
                            <img className="w-4 h-4" src={logo} alt="" />
                            <span >Login with Google</span>
                        </button>
                         
                        
                    </div>
                </form>
            </div>
            <div className="w-[50%] flex flex-col h-screen items-center pt-[200px] bg-green-500 p-10">
                <h1 className="text-white text-4xl">Welcome Resolve Management</h1>
                <h1 className="text-white pt-5">
                    Wecorte bocat we one s happy to have you here It's great to see you agar we hope you noda sole and enjoysti time away
                </h1>
            </div>
        </div>
    )
}