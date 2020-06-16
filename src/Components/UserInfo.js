import React from 'react';

export default function UserInfo({user}) {

    return(
        <div className="userdata">
        <img
          src={user.picture.large}
          alt={user.name.first}
        />
        <h2 className="name">
          <u>{user.name.first} {user.name.last}</u>
        </h2>
        <p> {user.email}</p>
        <p> {user.phone}</p>
        <p>{user.location.city}, {user.location.country}</p>
      </div>
    )
}

