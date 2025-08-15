"use server";
import { signIn, signOut } from "@/auth";
import { getUserByEmail } from "@/lib/utils";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { LoginSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  if (!values) return { error: "No values provided." };
  const validatedValues = LoginSchema.safeParse(values);
  if (!validatedValues.success) {
    return { error: "Invalid form data" };
  }
  const { email, password } = validatedValues.data;
  const user = await getUserByEmail(email);
  if(!user ) {
    return { error: "User not found please register." };
  }
  if(!user.password) {
    return { error: "User does not have a password set." };
  }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { error: "Invalid  password." };
    }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid email or password." };
        default:
          return { error: "Something went wrong" };
      }
    }
    throw error;
  }

  return { success: "Login successful" };
};

