/**
 * JSON.stringify() : chuyển giá trị (object,number ,string) thành chuỗi JSON
 * JSON.parsed() : dùng chuyển chuỗi JSON thành object/array
 * khi get thì phải chuyển chuỗi json thành object hoặc array còn lưu thì phải lưu chuỗi json
 */
export const storage = {
    get: (key: string) => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null
    },
    set: (key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    remove: (key: string) => {
        localStorage.removeItem(key)
    }

}