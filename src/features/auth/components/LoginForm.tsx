import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from '../hooks/useLogin';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../validation/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import type { LoginFormData } from '../validation/validation';

const LoginForm: React.FC = () => {
    const navigate = useNavigate();
    const { login, loading, error, user } = useLogin();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginFormData) => login(data);

    // SPA navigation dựa vào role
    useEffect(() => {
        if (user) {
            const redirectPath = ["admin", "superadmin"].includes(user.role)
                ? "/admin"
                : "/dashboard";
            navigate(redirectPath, { replace: true });
        }
    }, [user, navigate]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type="email" placeholder='email' {...register('email')} />
                {errors.email && <span>{errors.email.message}</span>}

                <input type="password" placeholder='password' {...register('password')} />
                {errors.password && <span>{errors.password.message}</span>}

                <button type='submit' disabled={loading}>
                    {loading ? 'Đang đăng nhập' : 'Login'}
                </button>

                {error && <div>{error}</div>}
            </div>
        </form>
    )
};

export default LoginForm;
