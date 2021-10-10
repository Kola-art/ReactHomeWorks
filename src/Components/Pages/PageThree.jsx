import React, {useContext} from 'react';
import { Typography } from '@mui/material';
import Form from '../FormСonstitute/Form';
import PageButton from '../FormСonstitute/Button';
import { useForm } from 'react-hook-form';
import MainContainer from '../Container/Container';
import PropTypes from 'prop-types';
import { TaskContext } from '../../Context/taskContext';
import Input from '../FormСonstitute/Input';
import { IMG_LOAD } from '../../Reducer/TaskReducer';
import ImageUser from '../FormСonstitute/UserImage';

const PageThree = ({ slidePageDown }) => {
  const [, dispatch] = useContext(TaskContext);
  const { register, handleSubmit } = useForm();
  const showData = (data) => {
    dispatch({
      type: IMG_LOAD,
      payload: {...data.file}
    });
  };
  
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
      Third Step
      </Typography>
      <Form onSubmit={handleSubmit(showData)}>
        <Input {...register('file')} id='file'
          type='file' placeholder='Upload Foto'
        />
        <Typography component="p" margin="10px" >
          Download or choose image
        </Typography>
        <ImageUser />
        <Typography component="div" display="flex" justifyContent="space-between" marginTop="15px">
          <PageButton type='button' onClick={slidePageDown}>Prev</PageButton>
          <PageButton type='submit'>Next</PageButton>
        </Typography>
      </Form>
      
    </MainContainer>
  );
};
PageThree.propTypes = {
  slidePageUp: PropTypes.func,
  slidePageDown: PropTypes.func,
  name: PropTypes.string,
  control: PropTypes.func,
};
export default PageThree;