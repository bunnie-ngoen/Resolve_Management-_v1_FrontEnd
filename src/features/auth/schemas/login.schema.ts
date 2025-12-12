/**
 * validate login input trước khi gửi tới backend
 */
import {z} from "zod";

export const loginSchema = z.object({
    email : z.string().nonempty('Email is required').email(),
    password : z.string().nonempty('Password is required').min(6)
})
export type LoginFormValues = z.infer<typeof loginSchema>