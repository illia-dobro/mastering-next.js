'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const { status, data: session } = useSession();

  if (status === 'loading') {
    return null;
  }
  return (
    <>
      <Link href="/users">Users</Link>
      {status === 'authenticated' && (
        <div>
          {session.user?.name}
          <Link href='/api/auth/signout'>Sign Out</Link>
        </div>
      )}
      {status === 'unauthenticated' && (
        <div>
          <Link href="/api/auth/signin">Sign-in</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
