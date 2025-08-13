'use server'
import { checkUserExists } from '@/lib/utils';
import { LoginSchema } from '@/schemas';
import bcrypt from 'bcryptjs';
import * as z from 'zod';

export const login = async(values:z.infer<typeof LoginSchema>) => {
    if(!values) return {error:"No values provided."};
    const validatedValues = LoginSchema.safeParse(values);
    if(!validatedValues.success) {
        return {error:"Invalid form data"};
    }
    const { email, password } = validatedValues.data;
    const user = await checkUserExists(email);
    if (!user) {
        return { error: "User does not exist" };
    }
    if(!user.password)
    {
        return { error: "User does not have a password set" };
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return { error: "Invalid password" };
    }
    return {success: "Login successful"};
}