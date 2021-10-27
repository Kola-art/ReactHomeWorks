import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../../UI';
import { filterParticipant } from '../../../actions';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function SearchFunc ({event}) {
  const { competitionId } = useParams();
  const participants = event[0].participants;
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  useMemo(() => {
    dispatch(filterParticipant(filter, competitionId));
  },[filter, participants]);
  
  return (
    <Input value={filter} onChange={(e)=> setFilter(e.target.value)} label='Search...' type='text'/>
  );
}
SearchFunc.propTypes = {
  event: PropTypes.array, 
};
export default SearchFunc;