import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

export const TaskContext = React.createContext();

export const TaskProvider = ({children, reducer, initialState}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TaskContext.Provider value={ [state, dispatch] }>
      {children}
    </TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.any,
  reducer: PropTypes.func,
  initialState: PropTypes.object,
};