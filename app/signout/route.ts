import { signOut } from '@/auth';

export async function POST() {
  await signOut();
  return new Response('Signed out', { status: 200 });
}
