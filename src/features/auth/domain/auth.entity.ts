/**
 * Interface chỉ đảm bảo type safety lúc viết code, không bảo vệ khi API trả về dữ liệu sai.
 * data structure (mô hình dữ liệu) mà frontend dùng để đại diện cho response từ backend.
 */
export interface UserEntity {
    id: number;
    username: string;
    email: string;
    role: string;
}
export interface AuthEntity{
    accessToken : string ;
    user : UserEntity;
}