import React from 'react';

export default function UserList({ users, handleClick }) {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li
            key={user.login.uuid}
            onClick={() => handleClick(user)}
          >
            <span>{user.name.first + ' ' + user.name.last}</span>
          </li>
        );
      })}
    </ul>
  );
}