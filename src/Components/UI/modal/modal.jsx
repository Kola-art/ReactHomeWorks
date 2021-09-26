import React from 'react';
import styles from './ModalStyle.module.css';
import PropTypes from 'prop-types';

function ModalDetails ({ onClick, showDetail, children}) {
  let modalStyles = [styles.modal];
  if (showDetail) {
    modalStyles.push(styles.active);
  }

  const stopBubles = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={modalStyles.join(' ')} onClick={()=> onClick(!showDetail)}>
      <div className={styles.detail} onClick={stopBubles}>
        { children }
      </div>
    </div>
  );
}

ModalDetails.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  showDetail: PropTypes.bool,
};

export default ModalDetails;