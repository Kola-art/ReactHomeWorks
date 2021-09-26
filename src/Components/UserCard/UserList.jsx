import React from 'react';
import  DrawCard  from './UserCard';
import styles from './cardStyle.module.css';
import PropTypes from 'prop-types';



function DrawUserList({users}) {
  
  if(!users.length) {
    return (
      <div className={styles.userList}>
        <h1 className={styles.userTitle}>Ooops Users Not Found</h1>
      </div>
    );
  }

  return (
    <div className={styles.userList}>
      {users.map(user => <DrawCard userInfo={user} key={user._id} />)}
    </div>
  );
}

DrawUserList.propTypes = {
  users: PropTypes.any,
};

export default DrawUserList;