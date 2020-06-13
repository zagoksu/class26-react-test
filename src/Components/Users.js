import React, { useState } from 'react';
import Button from './Button';
import UserList from './UserList';
import UserInfo from './UserInfo';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [info, setInfo] = useState('');

function getUsers() {
    setLoading(true);
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => {
            setUsers(data.results);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
        })
 }

 function getUserInfo(user) {
     return setInfo(user)
 }

  return (
    <div>
      <div>
        <Button handleEvent={getUsers} />
        {hasError && <p className="err">Something went wrong</p>}
        {isLoading && <div class="spinner-border"></div>}
        {!hasError && <UserList users={users} handleClick={getUserInfo}/>}
        {info && <UserInfo user={info}/>}
      </div>
    </div>
  );
}