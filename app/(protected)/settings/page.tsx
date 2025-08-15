import { auth, signOut } from '@/auth';

import SignOutButton from './SignoutButton';

export default async function Page() {
  const session = await auth();


  return (
    <div className="flex flex-col items-center justify-center gap-y-6 h-full">
      <p>You are logged in: {JSON.stringify(session)}</p>
      <SignOutButton />
    </div>
  );
}
