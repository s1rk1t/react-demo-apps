import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import { UsersList } from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uname, uage, ukey) => {
    setUsersList((prev) => {
      return [...prev, { name: uname, age: uage, key: ukey }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
