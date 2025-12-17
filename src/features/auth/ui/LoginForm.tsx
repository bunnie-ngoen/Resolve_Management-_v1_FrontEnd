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
import { default as logo } from '../../../assets/images/logo.webp'
import { default as face } from '../../../assets/images/facebook.png'
import { default as logo1 } from '../../../assets/images/logo.jpg'
import { Eye, EyeOff } from "lucide-react";

import { useState } from "react";
export default function LoginForm() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [login, { isLoading }] = useLoginMutation();

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        mode: "onChange"
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
        <div className="flex w-full h-screen items-center justify-center relative">
            <div className="w-[80%] flex justify-center h-screen items-center">
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm">
                    <div className="flex flex-col gap-3 ">
                        <h1 className="text-2xl font-bold pb-4 text-[#F97316]">WELCOME BACK</h1>
                        <h5 className="text-xl text-gray-400">Enter your email and password to sign in</h5>
                        <div className="flex flex-col gap-2">
                            <label className="font-bold" htmlFor="">Email</label>
                            <input
                                {...form.register("email")}
                                placeholder="Email"
                                className="p-2 pr-10 w-full bg-gray-100 rounded-xl 
             shadow-inner focus:outline-none 
             focus:ring-2 focus:ring-sky-100"
                                type="text" />
                            {form.formState.errors.email && (
                                <p className="text-red-500">{form.formState.errors.email.message}</p>
                            )}
                        </div>
                        <div className="relative">
                            <div className="flex flex-col gap-2">
                                <label className="font-bold" htmlFor="">Password</label>
                                <div className="relative">
                                    <input
                                        {...form.register("password")}
                                        placeholder="Password"
                                        type={showPassword ? "text" : "password"}
                                        className="p-2 pr-10 w-full bg-gray-100 rounded-xl 
             shadow-inner focus:outline-none 
             focus:ring-2 focus:ring-sky-100"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(prev => !prev)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" 
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>
                        </div>
                        {form.formState.errors.password && (
                            <p className="text-red-500">{form.formState.errors.password.message}</p>
                        )}
                        <div>
                            <h1 className="float-right">
                                <a href="">Forget Password?</a>
                            </h1>
                        </div>

                        <button type="submit" className="bg-[#F97316] p-2 text-center text-white hover:bg-[#c15508] w-full rounded-xl
             shadow-inner focus:outline-none 
             focus:ring-2 focus:ring-sky-400"
                            disabled={isLoading}>
                            {isLoading ? "Loading..." : "Login"}
                        </button>
                        <button className="border text-black p-2 rounded-xl text-center w-full flex items-center justify-center gap-2">
                            <img className="w-4 h-4" src={logo} alt="" />
                            <span >Login with Google</span>
                        </button>


                    </div>
                </form>
            </div>
            <div className="w-[50%] flex flex-col h-screen items-center">
                <img src={logo1} alt="" />
            </div>
        </div>
    )
}