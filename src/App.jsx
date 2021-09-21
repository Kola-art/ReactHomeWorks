import React, { useState } from 'react';
import { userData } from './Components/UserData/userData';
import DrawUserList from './Components/UserCard/UserList';
import './App.css';

function App() {
  const [users, setUser] = useState(userData);
  const createNewUser = (newUser) => {
    setUser([...users, newUser]);
  };

  return (
    <DrawUserList users={users} createNewUser={createNewUser} />
  );
}

export default App;
