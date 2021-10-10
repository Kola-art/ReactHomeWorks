import React, {useContext} from 'react';
import { Typography } from '@mui/material';
import Form from '../FormСonstitute/Form';
import Input from '../FormСonstitute/Input';
import PageButton from '../FormСonstitute/Button';
import { useForm } from 'react-hook-form';
import MainContainer from '../Container/Container';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'; 
import { TaskContext } from '../../Context/taskContext';
import PropTypes from 'prop-types';

const schema = yup.object().shape({
  FirstName: yup.string()
    .required('Hey you forget about first name'),
  LastName: yup.string()
    .required('Hey you forget about last name'),
  Email: yup.string().email('You should write correct email')
    .required('Hey you forget about email'),
}).required();

const PageOne = ({ slidePageUp }) => {
  const [state] = useContext(TaskContext);
  const { register, handleSubmit, formState:{ errors } } = useForm({
    defaultValues: {FirstName: state.data.FirstName, LastName: state.data.LastName,
      Email: state.data.Email},
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
       First Step
      </Typography>
      <Form onSubmit={handleSubmit(slidePageUp)}>
        <Input {...register('FirstName')} id='firstName'
          type='text' label='First Name' error={!!errors.FirstName}
          helperText={errors?.FirstName?.message}
        />
        <Input {...register('LastName')} id='lastName' 
          type='text' label='Last Name' error={!!errors.LastName}
          helperText={errors?.LastName?.message}
        />
        <Input {...register('Email')}  id='email'
          type='email' label='Email' error={!!errors.Email}
          helperText={errors?.Email?.message}
        />
        <Typography component="div" textAlign="center" marginTop="15px">
          <PageButton type='submit'>Next</PageButton>
        </Typography>
      </Form>
    </MainContainer>
  );
};
PageOne.propTypes = {
  slidePageUp: PropTypes.func,
};
export default PageOne;