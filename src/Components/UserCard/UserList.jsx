import React from 'react';
import  DrawCard  from './UserCard';
import styles from './cardStyle.module.css';
import PropTypes from 'prop-types';

function DrawUserList({users}) {
  return (
    <div className={styles.userList}>
      {users.map(user => <DrawCard userInfo={user} key={user._id} />)}
    </div>
  );
}

DrawUserList.propTypes = {
  users: PropTypes.array,
  createNewUser: PropTypes.func
};

export default DrawUserList;