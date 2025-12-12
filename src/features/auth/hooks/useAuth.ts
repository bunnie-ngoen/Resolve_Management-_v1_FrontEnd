/**
 * tạo custome hook:
 * dễ dàng lấy dữ liệu auth từ redux
 * ẩn đi logic selector giúp code component ngắn và sạch hơn
 * chuẩn hóa cách truy cập thông tin đăng nhập
 */
import { useAppSelector } from "../../../app/hook"
import { selectAuth } from "../selectors/auth.selectors"

export const useAuth = () =>{
    return useAppSelector(selectAuth);
}