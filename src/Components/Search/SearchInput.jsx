import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchStyles.module.css';

function SearchInput({searchFilter}){

  return (
    <header className={styles.headerSearch}>
      <input type='text' placeholder='Search by name' onChange={searchFilter}/>
    </header>
  );
}

SearchInput.propTypes = {
  searchFilter: PropTypes.func
};
export default SearchInput;