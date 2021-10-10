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
import PropTypes from 'prop-types';

const schema = yup.object().shape({
  City: yup.string()
    .required('Hey you forget about your`s city'),
  Street: yup.string()
    .required('Hey you forget about your`s street'),
  House: yup.string()
    .required('Hey you forget about your`s house'),
}).required();

const PageTwo = ({ slidePageUp, slidePageDown }) => {
  const [state] = useContext(TaskContext);
  
  const { register, handleSubmit, formState:{ errors } } = useForm({
    defaultValues: {City: state.data.City, Street: state.data.Street,
      House: state.data.House },
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });
  
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
       Second Step
      </Typography>
      <Form onSubmit={handleSubmit(slidePageUp)}>
        <Input {...register('City')} id='city'
          type='text' label='City' error={!!errors.City}
          helperText={errors?.City?.message}
        />
        <Input {...register('Street')} id='street' 
          type='text' label='Street' error={!!errors.Street}
          helperText={errors?.Street?.message}
        />
        <Input {...register('House')}  id='house'
          type='text' label='House' error={!!errors.House}
          helperText={errors?.House?.message}
        />
        <Typography component="div" display="flex" justifyContent="space-between" marginTop="15px">
          <PageButton type='button' onClick={slidePageDown}>Prev</PageButton>
          <PageButton type='submit'>Next</PageButton>
        </Typography>
      </Form>
    </MainContainer>
  );
};
PageTwo.propTypes = {
  slidePageUp: PropTypes.func,
  slidePageDown: PropTypes.func,
};

export default PageTwo;