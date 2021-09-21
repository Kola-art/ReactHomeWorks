import React from 'react';
import  DrawCard  from './UserCard';
import UserCreator from '../UserCreator/CreateUser';
import styles from './cardStyle.module.css';
import PropTypes from 'prop-types';

function DrawUserList({users, createNewUser}) {
  return (
    <div className={styles.userList}>
      <UserCreator createNewUser={createNewUser} users={users} />
      {users.map(user => <DrawCard userInfo={user} key={user._id} />)}
    </div>
  );
}

DrawUserList.propTypes = {
  users: PropTypes.array,
  createNewUser: PropTypes.func
};

export default DrawUserList;