import React, { useState } from 'react';
import SelectChoise from '../../UI/Selection/Select';
import ModalDetails from '../../UI/modal/modal';
import ButtonCreator from '../../UI/Button/Button';
import { v4 } from 'uuid';
import styles from './CreatorStyle.module.css';
import PropTypes from 'prop-types';

function UserCreator({createNewUser, callForm, setCallForm}) {
  const [genderValue, setGenderValue] = useState('');
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
      _id: v4(),
      gender: genderValue
    });
    setNewUser({
      ...newUser, 
      name: '',
      age: '',
      gender: '',
      balance: '',
    });
    setCallForm(false);
    setGenderValue('');
  };
 
  return (
    <div>
      <ButtonCreator showDetail={callForm} onClick={setCallForm} >Call user creator form</ButtonCreator>
      <ModalDetails showDetail={callForm} onClick={setCallForm}> 
        <form className = {styles.creatorForm} onSubmit = {addNewUser}>
          <input type="text" 
            value = {newUser.name}
            onChange = {(event) => setNewUser({...newUser, name: event.target.value })}
            placeholder="User name" name='userName'/>
          <input type="number" 
            value = {newUser.age}
            onChange = {(event) => setNewUser({...newUser, age: event.target.value })}
            placeholder="User age" />
          <SelectChoise options ={
            [
              {value: 'male', title: 'male'},
              {value: 'female', title: 'female'},
            ]} defaultValue= 'Choose gender' value = {genderValue} onChange={setGenderValue}
          /> 
          <input type="number" 
            value = {newUser.balance}
            onChange = {(event) => setNewUser({...newUser, balance: event.target.value })}
            placeholder="User balance" />
          <input type="submit" value="Create new user" />
        </form>
      </ModalDetails>
    </div>
  );
}

UserCreator.propTypes = {
  createNewUser: PropTypes.func,
  callForm: PropTypes.bool, 
  setCallForm: PropTypes.func
};

export default UserCreator;