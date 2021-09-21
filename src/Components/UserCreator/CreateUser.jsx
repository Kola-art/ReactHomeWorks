import React, { useState } from 'react';
import styles from './CreatorStyle.module.css';
import PropTypes from 'prop-types';

function UserCreator({createNewUser, users}) {

  const [newUser, setNewUser] = useState({
    name: '',
    age: '',
    gender: '',
    balance: '',
  });

  const addNewUser = (event) =>{
    event.preventDefault();
    let tryBalance = newUser.balance.split('');
    if ( tryBalance.length <= 2) {
      tryBalance.splice(0, 0, '0.');
    } else if(tryBalance.length > 2 && tryBalance.length <= 5 ) {
      tryBalance.splice(-2, 0, '.');
    } else if(tryBalance.length > 5 ) {
      tryBalance.splice(-2, 0, '.');
      tryBalance.splice(-6, 0, ',');
    }
    tryBalance = tryBalance.join('');
    
    createNewUser({
      ...newUser,
      balance: '$' + tryBalance,
      picture: 'http://placehold.it/32x32',
      _id: users.length + 1
    });

    setNewUser({
      ...newUser, 
      name: '',
      age: '',
      gender: '',
      balance: '',
    });

  };
 
  return (
    <form className= {styles.creatorForm}>
      <input type="text" 
        value = {newUser.name}
        onChange = {(event) => setNewUser({...newUser, name: event.target.value })}
        placeholder="User name" name='userName'/>
      <input type="number" 
        value = {newUser.age}
        onChange = {(event) => setNewUser({...newUser, age: event.target.value })}
        placeholder="User age" />
      <input type="text" 
        value = {newUser.gender}
        onChange = {(event) => setNewUser({...newUser, gender: event.target.value })}
        placeholder="User gender" />
      <input type="number" 
        value = {newUser.balance}
        onChange = {(event) => setNewUser({...newUser, balance: event.target.value })}
        placeholder="User balance" />
      <input type="button" value="Create new user" onClick= { addNewUser } />
    </form>
  );
}

UserCreator.propTypes = {
  users: PropTypes.array,
  createNewUser: PropTypes.func
};

export default UserCreator;