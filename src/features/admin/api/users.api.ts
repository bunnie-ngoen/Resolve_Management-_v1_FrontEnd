import { api } from "../../../shared/api";
import { type CreateUserDto, type User } from "../schemas/create-user.schema";
import { UserResponseSchema } from "../schemas/create-user.schema";

export const userApi = api.injectEndpoints({
    endpoints :(builder) =>({
        createUser : builder.mutation<User , CreateUserDto>({
             query : (body) =>({
                url : '/admin/create-user',
                method : "POST",
                body
             }),
        transformResponse : (response : unknown)=> UserResponseSchema.parse(response)
        })
    })
    
})