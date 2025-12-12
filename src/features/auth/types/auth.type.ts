/**
 * * Định nghĩa dữ liệu nhận từ backend sau khi login và lưu vào Redux store
 */
export interface AuthState{
    accessToken : string | null;
    user : {
        id : number ,
        username : string,
        email : string,
        role : string
    } | null
}