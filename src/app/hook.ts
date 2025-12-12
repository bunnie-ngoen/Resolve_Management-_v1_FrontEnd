/**
 * Cầu nối giữa Redux store và React component , giúp TypeScipt hiểu store và actions mà bạn đang dùng
 * useDispatch → hook chuẩn của Redux, dùng để dispatch action.
 * useSelector → hook chuẩn của Redux, dùng để lấy dữ liệu từ state.
 * TypedUseSelectorHook → helper của TypeScript, giúp gắn kiểu cho state, tránh phải cast thủ công.
 * AppDispatch → type của dispatch trong store (cần khi dùng RTK Query hoặc async thunk)
 * Nếu không có file này : Không có autocomplete,dispatch sai action ,ts sẽ không cảnh báo,mà chỉ hiển thị lỗi runtime
 */
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import type { AppDispatch ,RootState} from "./store";

export const useAppDispatch : () => AppDispatch =useDispatch;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;