import React from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Input, ButtonCreator, Form }  from '../Components/UI';
import { Typography } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'; 
import { useForm } from 'react-hook-form';
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createCompetition } from '../actions';

const styles = {
  wrapper: {
    border: '3px solid orange',
    padding: '20px 0 20px 0',
    margin: '0 auto',
    width: '400px'
  },
  root: {
    textAlign: 'center'
  },
  box: {
    width: '85%',
    margin: '30px auto 0 auto'
  },
};

const schema = yup.object().shape({
  name: yup.string()
    .required('Hey you forget about contest name'),
}).required();

function EventCreatorPage () {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, formState:{ errors }, reset } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });
  const createContest = (data) => {
    console.log(data);
    const competitionData =  {
      id: v4(),
      name: data.name,
      status: false,
      winner: null,
      participants: [] 
    };
    dispatch(createCompetition(competitionData));
    history.push('/');
    reset();
  };
  return (
    <Box sx={styles.wrapper} component='div'>
      <Typography sx={styles.root} component='h2' variant="h5">Create contest</Typography>
      <Box sx={styles.box}>
        <Form onSubmit={handleSubmit(createContest)}>
          <Input {...register('name')} id='name'
            type='text' label='Contest name' error={!!errors.name}
            helperText={errors?.name?.message}
          />
          <Typography component="div" textAlign="center" marginTop="15px">
            <ButtonCreator view="contained" type='submit'>
               Create
            </ButtonCreator>
          </Typography>
        </Form>
      </Box>
    </Box>
  );
}

export default EventCreatorPage;