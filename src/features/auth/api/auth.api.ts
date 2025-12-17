/**
 * tạo api endpoint login cho frontend bằng RTK Query
 */
import { api } from "../../../shared/api";
import type { LoginResponse } from "../schemas/login.response.schema";
import { LoginResponseSchema } from "../schemas/login.response.schema";

export const authApi = api.injectEndpoints({
    endpoints : (build)=>({
        /**
         * định nghĩa mutation login
         * LoginResponse : kiểu dữ liệu mà backend trả về sau khi gọi login
         * {email , password} : kiểu dữ liệu input gửi vào mutation
         */
        login: build.mutation<LoginResponse, {email : string ; password :string}>({
            /**
             * url : endpoint của backend
             * @param body 
             * @returns 
             */
            query :(body)=> ({
                url : '/auth/login',
                method : "POST",
                body
            }),
            /**
             * dùng LoginResponseSchema để validate cấu trúc, ép kiểu,đảm bảo fe không nhận dữ liệu sai format
             * nếu sai tự động throw error 
             * @param response : dữ liệu backend trả về , có thể bất kỳ dạng gì
             * @returns 
             */
            transformResponse : (response : unknown)=> LoginResponseSchema.parse(response),
        })
    })
})
//export hook để ui sử dụng
export const {useLoginMutation} =authApi;