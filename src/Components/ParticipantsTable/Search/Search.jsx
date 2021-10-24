import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../../UI';
import { filterParticipant } from '../../../actions';
import { useSelector } from 'react-redux';

function SearchFunc () {
  const dispatch = useDispatch();
  const participants = useSelector(state => state.participants);
  const [filter, setFilter] = useState('');
  
  useMemo(() => {
    dispatch(filterParticipant(filter));
  },[filter, participants]);
  
  return (
    <Input value={filter} onChange={(e)=> setFilter(e.target.value)} label='Search...' type='text'/>
  );
}
export default SearchFunc;