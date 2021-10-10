import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, {useContext} from 'react';
import MainContainer from '../Container/Container';
import { TaskContext } from '../../Context/taskContext';
import Avatar from '../FormСonstitute/Avatar';
import ReactConfetti from 'react-confetti';


const Result = () => {
  const [state] = useContext(TaskContext);
  const entries = Object.entries(state.data).filter((entry) => entry[0] !== 'password');
  return (
    <MainContainer>
      <ReactConfetti />
      <Typography component="h2" variant="h5" color='green' >
      Thank you for registration
      </Typography>
      <Avatar />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan='2' align='center' >
                Contact information
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              entries.map(entry => (
                <TableRow key={entry[0]}>
                  <TableCell>
                    {  
                      entry[0]
                    }
                  </TableCell>
                  <TableCell align='right'>
                    {entry[1].toString()}
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </MainContainer>
  );
};

export default Result;