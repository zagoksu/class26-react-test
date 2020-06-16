import React, { useState } from 'react';
import Button from './Button';
import UserList from './UserList';
import UserInfo from './UserInfo';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [info, setInfo] = useState('');

const getUsers = async () => {
  setLoading(true);
  try {
    const response = await fetch('https://randomuser.me/api/?results=5');
    if (response.ok) {
      const data = await response.json();
      setUsers(data.results);
      setError(false);
    } else {
      throw new Error("Something went wrong...");
    }
  } catch (err) {
    setError(true);
  } finally {
    setLoading(false);
  }
};
    
 function getUserInfo(user) {
     return setInfo(user)
 }

  return (
    <div>
      <div>
        <div>
          <Button handleEvent={getUsers} />
        </div>
        {hasError && <p className="err">Something went wrong</p>}
        {isLoading && <div class="spinner-border"></div>}
        {!hasError && <UserList users={users} handleClick={getUserInfo}/>}
        {info && <UserInfo user={info}/>}
      </div>
    </div>
  );
}