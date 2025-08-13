import z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({message: "Invalid email address"}).min(1, {message: "Email is required"}),
    password: z.string().min(1, {message: "Password is required"}),
})

export const RegisterSchema = z.object({
    name:z.string().min(1, {message: "Name is required"}),
    email: z.string().email({message: "Invalid email address"}).min(1, {message: "Email is required"}),
    password: z.string().min(1, {message: "Password is required"}),
})