/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import TextField from '@mui/material/TextField';

const Input = forwardRef((props, ref) => {
  return (
    <TextField variant='outlined' margin='normal' fullWidth inputRef={ref} {...props}/>
  );
});

export default Input;