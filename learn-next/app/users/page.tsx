import React, { Suspense } from 'react';
import UserTable from './user-table';

const UsersPage = async () => {
  return (
    <>
      <h1>UsersPage</h1>
      <UserTable/>
    </>
  );
};

export default UsersPage;
