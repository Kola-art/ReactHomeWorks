import React from 'react';
import styles from './cardStyle.module.css';
import PropTypes from 'prop-types';

function DrawCard({ userInfo }) {
  return (
    <div className={styles.userCard}>
      <p>
        Name: {userInfo.name}
      </p>
      <p>
        age: {userInfo.age}
      </p>
      <p>
        gender: {userInfo.gender}
      </p>
      <p>
        balance: {userInfo.balance}
      </p>
      <img src={userInfo.picture} alt="user" />
    </div>
  );
}

DrawCard.propTypes = {
  userInfo: PropTypes.any
};

export default DrawCard;