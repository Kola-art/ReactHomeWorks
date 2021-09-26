import React, {useState} from 'react';
import ModalDetails from '../UI/modal/modal';
import ButtonCreator from '../UI/Button/Button';
import styles from './cardStyle.module.css';
import PropTypes from 'prop-types';

function DrawCard({ userInfo }) {
  const [showDetail, setShowDetail] = useState(false);

  const drawDetail = (obj) => {
    let content = [];
    let friends = '';
    for(let key in obj) {
      if (key == 'friends') {
        obj[key].forEach(element => {
          friends += `${element.name}, `;
        });
        content.push(`${key}: ${friends}`);
      }
      else content.push(`${key}: ${obj[key]}`);
    }
    return content;
  };

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
      <ButtonCreator showDetail={showDetail} onClick={setShowDetail}>Show Details</ButtonCreator>
      <ModalDetails showDetail={showDetail} onClick={setShowDetail}> 
        <h2>Information about: {userInfo.name}</h2>
        <ul className={styles.menuInfo}>
          {drawDetail(userInfo).map((user,idx) => {
            return <li key={idx}>{user}</li>;
          })
          }
        </ul>
      </ModalDetails>
    </div>
  );
}

DrawCard.propTypes = {
  userInfo: PropTypes.any
};

export default DrawCard;