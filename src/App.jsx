import React, {useState} from 'react';
import HeaderForms from './Components/UserForm/HeaderForms';
import DrawUserList from './Components/UserCard/UserList';
import './App.css';

function App() {
  const [sortedUsers, setSortedUsers] = useState('');
 
  return (
    <div className='wrapper'>
      <HeaderForms sortedUsers = {setSortedUsers} />
      <div className='App'>
        <DrawUserList users={sortedUsers} />
      </div>
    </div>
  );
}

export default App;
