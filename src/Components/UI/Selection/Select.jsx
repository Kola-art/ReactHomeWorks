import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectStyle.module.css';

function SelectChoise({ options, defaultValue, value, onChange }){

  return (
    <select value={value} onChange = {(event) => onChange(event.target.value)}
      className={styles.select}>
      <option value='default'>{defaultValue}</option>;
      {
        options.map(option => {
          return <option value={option.value} key={option.value}>{option.title}</option>;
        })
      } 
    </select>
  );
}

SelectChoise.propTypes = {
  options: PropTypes.array,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
export default SelectChoise;