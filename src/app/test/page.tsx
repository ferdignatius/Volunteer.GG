// 'use client';

// import { useSession, signIn, signOut } from 'next-auth/react';

// export default function HomePage() {
//   const { data: session } = useSession()

//   if (session) {
//     return (
//       <>
//         <p>Signed in as {session.user?.email}</p>
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     );
//   }
//   return (
//     <>
//       <p>Not signed in</p>
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   );
// }

'use client';

import { useUsers } from '@/hooks/useUsers';

export default function UsersPage() {
  const { data, isLoading, error } = useUsers()

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;
  if (!data?.length) return <p>No users found.</p>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map((user: any) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}