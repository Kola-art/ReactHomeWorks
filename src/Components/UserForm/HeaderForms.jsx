import React, {useState, useMemo} from 'react';
import { userData } from '../UserData/userData';
import SearchInput from './Search/SearchInput';
import SelectChoise from '../UI/Selection/Select';
import UserCreator from './UserCreator/CreateUser';
import PropTypes from 'prop-types';
import styles from './HeaderStyles.module.css';

function HeaderForms({ sortedUsers }){

  const [users, setUser] = useState(userData);
  const createNewUser = (newUser) => {
    setUser([...users, newUser]);
  };

  const [filter, setFilter] = useState('');
  const searchFilter = (event) => {
    setFilter(event.target.value);
  };
  const filteredUsers = useMemo(()=>{
    return users.filter( user => user.name.toLowerCase().includes(filter.toLowerCase()));
  },[filter, users]);

  const [sort, setSort] = useState('default');

  sortedUsers( useMemo(()=>{
    if (sort === 'default') {
      return filteredUsers;
    } else if (sort === 'decrement') {
      let sortedFilteredUsers = filteredUsers.concat().sort((a, b) => b.age - a.age);
      return sortedFilteredUsers;
    } else if (sort === 'increment') {
      let sortedFilteredUsers = filteredUsers.concat().sort((a, b) => a.age - b.age);
      return sortedFilteredUsers;
    }
  },[sort, filteredUsers]));

  const [callForm, setCallForm] = useState(false);

  return (
    <header className={styles.headerSearch}>
      <SearchInput searchFilter={searchFilter}/>
      <SelectChoise options ={
        [
          {value: 'decrement', title: 'Sort from oldest'},
          {value: 'increment', title: 'Sort from youngest'},
        ]} defaultValue= 'Sort by age' value={sort} onChange={setSort}
      /> 
      <UserCreator createNewUser={createNewUser} callForm = {callForm}
        setCallForm = {setCallForm} />
    </header>
  );
}

HeaderForms.propTypes = {
  sortedUsers: PropTypes.any,
};
export default HeaderForms;