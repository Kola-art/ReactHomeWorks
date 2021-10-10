import React, {useContext} from 'react';
import { Typography } from '@mui/material';
import { TaskContext } from '../../Context/taskContext';
import one from '../images/one.png';
import two from '../images/two.png';
import three from '../images/three.jpg';
import four from '../images/four.jpg';
import five from '../images/five.png';
import six from '../images/six.jpg';
import PropTypes from 'prop-types';
import { IMG_CHOOSE } from '../../Reducer/TaskReducer';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: { 
    width: '30%',
    height: 'auto',
    cursor: 'pointer',
    marginBottom: '10px'
  },
  wrapper: { 
    padding: '10px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  chosen: { 
    filter: 'saturate(var(--value, 5))',
    border: '3px solid green',
    borderRadius: '50%'
  }
});

const ImageUser = () => {
  const styles = useStyles();
  const [, dispatch] = useContext(TaskContext);

  const chosen = (event) => {
    dispatch({
      type: IMG_CHOOSE,
      payload: event.target.name,
    });
    let elems = document.getElementsByTagName('img');
    for(let i = 0; i < elems.length; i++ ) {
      elems[i].className = styles.root;
    }
    event.target.classList.add(styles.chosen);
  };
  return (
    <Typography component="div" className={styles.wrapper}>
      <Typography component="img" src={one} onClick={(event)=>chosen(event)} name="one" className={styles.root} />
      <Typography component="img" src={two} onClick={(event)=>chosen(event)} name="two" className={styles.root} />
      <Typography component="img" src={three} onClick={(event)=>chosen(event)} name="three" className={styles.root} />
      <Typography component="img" src={four} onClick={(event)=>chosen(event)} name="four" className={styles.root} />
      <Typography component="img" src={five} onClick={(event)=>chosen(event)} name="five" className={styles.root} />
      <Typography component="img" src={six} onClick={(event)=>chosen(event)} name="six" className={styles.root} />
    </Typography>
  );
};
ImageUser.propTypes = {
  name: PropTypes.string,
};
export default ImageUser;