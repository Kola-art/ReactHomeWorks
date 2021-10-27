import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../UI';
import { filterEvents } from '../../../actions';
import PropTypes from 'prop-types';

function SearchEvent () {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events);
  const [filter, setFilter] = useState('');
 
  useMemo(() => {
    dispatch(filterEvents(filter));
  },[filter, events]);
  
  return (
    <Input value={filter} onChange={(e)=> setFilter(e.target.value)} label='Search by name...' type='text'/>
  );
}
SearchEvent.propTypes = {
  event: PropTypes.array, 
};
export default SearchEvent;