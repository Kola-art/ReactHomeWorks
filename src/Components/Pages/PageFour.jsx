import React, { useContext } from 'react';
import MainContainer from '../Container/Container';
import { useForm } from 'react-hook-form';
import Form from '../FormСonstitute/Form';
import Input from '../FormСonstitute/Input';
import PageButton from '../FormСonstitute/Button';
import { Typography } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'; 
import { TaskContext } from '../../Context/taskContext';
import { PASS_VALID } from '../../Reducer/TaskReducer';
import PropTypes from 'prop-types';

const schema = yup.object().shape({
  password: yup.string()
    .min(4, 'Password must be at least 4 characters')
    .required('Password is required'),
  repassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords are different')
    .required('Repeat Password please'),
}).required();

const PageFour = ({ slidePageDown }) => {
  const [state, dispatch] = useContext(TaskContext);
  
  const passValidation = (data) => {
    const  newPassword = {
      password:  data.password,
    };
    dispatch({
      type: PASS_VALID,
      payload: newPassword
    });
  };

  const { register, handleSubmit, formState:{ errors } } = useForm({
    defaultValues: { 
      password: state.data.password, 
      repassword: state.data.repassword,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });
  
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
       Fourth Step
      </Typography>
      <Form onSubmit={handleSubmit(passValidation)}>
        <Input {...register('password')} id='password'
          type='password' label='Password' error={!!errors.password}
          helperText={errors?.password?.message}
        />
        <Input {...register('repassword')} id='repassword'
          type='password' label='Repeat password ' error={!!errors.repassword}
          helperText={errors?.repassword?.message}
        />
        <Typography component="div" display="flex" justifyContent="space-between" marginTop="15px">
          <PageButton type='button' onClick={slidePageDown}>Prev</PageButton>
          <PageButton type='submit'>Submit</PageButton>
        </Typography>
      </Form>
    </MainContainer>
  );
};
PageFour.propTypes = {
  slidePageDown: PropTypes.func,
};

export default PageFour;