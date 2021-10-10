import React, { useContext, useEffect, useRef } from 'react';
import { Typography } from '@mui/material';
import { TaskContext } from '../../Context/taskContext';
import one from '../images/one.png';
import two from '../images/two.png';
import three from '../images/three.jpg';
import four from '../images/four.jpg';
import five from '../images/five.png';
import six from '../images/six.jpg';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: { 
    width: '250px',
    height: '200px',
    margin: '10px'
  },
});

const Avatar = () => {
  const styles = useStyles();
  const foto = useRef();
  const [state] = useContext(TaskContext);
  let { file } = state;
  let { img } = state;
  file = Object.values(file);
  useEffect( () => {
    if (file.length) {
      let fr = new FileReader();
      fr.readAsDataURL(file[0]);
      fr.onload = function () {
        foto.current.src = fr.result;
      };
    }
    else {
      foto.current.src = (img === 'one') ? one
        : (img === 'two') ? two 
          : (img === 'three') ? three 
            : (img === 'four') ? four
              : (img === 'five') ? five 
                : (img === 'six') ? six : six;
    }
  },[]);
    
  return (
    <>
      <Typography component="img" name="userFoto" ref={foto}  className={styles.root}/>
    </>
  );
};

export default Avatar;