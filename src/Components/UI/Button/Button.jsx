import React from 'react';
import styles from './ButtonStyle.module.css';
import PropTypes from 'prop-types';

function ButtonCreator ({children, onClick, showDetail }) {
  return (
    <button className={styles.creatorBtn} onClick = {() => onClick(!showDetail)}>{children}
    </button>
  );
}

ButtonCreator.propTypes = {
  onClick: PropTypes.func,
  showDetail: PropTypes.bool,
  children: PropTypes.string,
};

export default ButtonCreator;