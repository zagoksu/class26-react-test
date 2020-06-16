import React from 'react';
import ListItems from './ListItems';

export default function UserList({users, handleClick}) {
  return (
    <ul>
      {users.map((user) => {
        return (
          <ListItems user={user} handleEvent={() => handleClick(user)}/>
        );
      })}
    </ul>
  );
}