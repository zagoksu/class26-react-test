import React from 'react';

export default function ListItems({ user, handleEvent}) {

    return (
        <li
            key={user.login.uuid}
            onClick={handleEvent}
          >
            <span>{user.name.first + ' ' + user.name.last}</span>
          </li>
    )
}