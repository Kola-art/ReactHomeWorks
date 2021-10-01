import React from 'react';
import PropTypes from 'prop-types';

function ButtonCreator({onClick, children, bg}) {
  const styleBtn = 'timebtn '+ bg;
  return (
    <button className={styleBtn} onClick={(event)=>onClick(event)}>{children}</button>
  );
}
ButtonCreator.propTypes = {
  children: PropTypes.string, 
  onClick: PropTypes.func,
  bg:  PropTypes.string, 
};
export default ButtonCreator;