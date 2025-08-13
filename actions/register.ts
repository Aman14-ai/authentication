'use server'
import { prisma } from '@/lib/db/prisma';
import { checkUserExists } from '@/lib/utils';
import { RegisterSchema } from '@/schemas';
import bcrypt from 'bcryptjs';
import * as z from 'zod';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  if (!values) return { error: "No values provided." };
  const validatedValues = RegisterSchema.safeParse(values);

  if (!validatedValues.success) {
    return { error: "Invalid form data" };
  }

  const { name , email , password} = validatedValues.data;

  const existedUser = await checkUserExists(email);;
  if (existedUser != null) {
    return { error: "User already exists" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.users.create({
    data:{
      name,
      email,
      password:hashedPassword
    }
  })

  return { success: "Registration successful" };
}