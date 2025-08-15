import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { prisma } from "./db/prisma";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getUserByEmail(email:string)
{
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return null;
  }
  return user;
}

export async function getUserById(id:string)
{
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    return null;
  }
  return user;
} 