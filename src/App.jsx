import React, { useState, useMemo } from 'react';
import { userData } from './Components/UserData/userData';
import SearchInput from './Components/Search/SearchInput';
import UserCreator from './Components/UserCreator/CreateUser';
import DrawUserList from './Components/UserCard/UserList';
import './App.css';

function App() {

  const [users, setUser] = useState(userData);
  const createNewUser = (newUser) => {
    setUser([...users, newUser]);
  };

  const [filter, setFilter] = useState('');
  const searchFilter = (event) => {
    setFilter(event.target.value);
  };

  const filteredUsers = useMemo(()=>{
    return users.filter( user => user.name.toLowerCase().includes(filter.toLowerCase()));
  },[filter, users]);

  

  return (
    <div>
      <SearchInput searchFilter={searchFilter} />
      <div className='App'>
        <UserCreator createNewUser={createNewUser} users={users} />
        <DrawUserList users={filteredUsers} createNewUser={createNewUser} />
      </div>
    </div>
  );
}

export default App;
