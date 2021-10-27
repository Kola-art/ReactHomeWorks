import React, {useState} from 'react';
import { Input, ButtonCreator, Form }  from '../../UI';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'; 
import { useForm } from 'react-hook-form';
import { v4 } from 'uuid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import RegistrationTimer from './RegistrationTimer';

const styles = {
  wrapper: {
    border: '3px solid orange',
    padding: '50px 0 50px 0',
  },
  root: {
    textAlign: 'center'
  },
  box: {
    width: '70%',
    margin: '50px auto 0 auto'
  },
};


const schema = yup.object().shape({
  FirstName: yup.string()
    .required('Hey you forget about first name'),
  SecondName: yup.string()
    .required('Hey you forget about second name'),
}).required();


function RegistrationForm() {
  const [name, setName] = useState({
    firstName: '',
    secondName: '',
    id: null,
    openRegistry: false
  });

  const { register, handleSubmit, formState:{ errors }, reset } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  const setData = (data) => {
    setName({
      ...name,
      firstName: data.FirstName,
      secondName: data.SecondName,
      id: v4(),
      openRegistry: true
    });
    reset();
  };
  return(
    <>
      <Box sx={styles.wrapper} component='div'>
        <Typography sx={styles.root} component='h1' variant="h3">Registration User</Typography>
        <Box sx={styles.box}>
          <Form onSubmit={handleSubmit(setData)}>
            <Input {...register('FirstName')} id='firstName'
              type='text' label='First Name' error={!!errors.FirstName}
              helperText={errors?.FirstName?.message}
            />
            <Input {...register('SecondName')} id='SecondName' 
              type='text' label='Second Name' error={!!errors.SecondName}
              helperText={errors?.SecondName?.message}
            />
            <Typography component="div" textAlign="center" marginTop="15px">
              <ButtonCreator view="contained" type='submit'>Register Participant</ButtonCreator>
            </Typography>
          </Form>
        </Box>
      </Box>
      <RegistrationTimer name={name} setName={setName}/>
    </>
  );
}
export default RegistrationForm;