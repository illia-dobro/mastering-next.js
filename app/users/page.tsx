import React from 'react';

type User = {
  id: number;
  name: string;
};

const UsersPage = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json();

  return (
    <>
      <div>UsersPage</div>
      <ul>{users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </>
  );
};

export default UsersPage;
