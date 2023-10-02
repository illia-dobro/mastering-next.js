import React from 'react';

type User = {
  id: number;
  name: string;
  email: string
};

const UsersPage = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 10 },
  });
  const users: User[] = await response.json();

  return (
    <>
      <div>UsersPage</div>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user) => (
          <tr key={user.id}><td>{user.name}</td><td>{user.email}</td></tr>
        ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
