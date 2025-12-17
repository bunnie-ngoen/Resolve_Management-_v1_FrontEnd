import { z } from "zod";

export const CreateUserSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  username: z.string().min(3),
  email: z.string().email(),
  phoneNumber: z.string().min(8),
  dateOfBirth: z.string(), // yyyy-mm-dd
  gender: z.enum(["male", "female", "other"]),
  address: z.string().optional(),
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;


export const UserResponseSchema = CreateUserSchema.extend({
  id: z.number(),
  status: z.enum(["active", "pending"]),
  createdAt: z.string(),
});

export type User = z.infer<typeof UserResponseSchema>;
