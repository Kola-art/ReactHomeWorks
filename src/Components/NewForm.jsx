import React, { useContext } from 'react';
import Header from './Header/Header';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import PageThree from './Pages/PageThree';
import { TaskContext } from '../Context/taskContext';
import { PAGE_DOWN, PAGE_UP } from '../Reducer/TaskReducer';
import PageFour from './Pages/PageFour';
import Result from './Pages/Result';

function NewForm() {
  const [state, dispatch] = useContext(TaskContext);

  const slidePageUp = (data) => {
    dispatch({
      type: PAGE_UP,
      payload: {...data}
    });
  };

  const slidePageDown = () => {
    dispatch({
      type: PAGE_DOWN,
    });
  };

  return (
    <div className='form'>
      <Header />
      { (state.step === 1 ) ? <PageOne slidePageUp={slidePageUp}/> 
        : (state.step === 2 ) ? <PageTwo slidePageDown={slidePageDown} slidePageUp={slidePageUp} /> 
          : (state.step === 3 ) ? <PageThree slidePageDown={slidePageDown} /> 
            : (state.step === 4 ) ? <PageFour slidePageDown={slidePageDown} /> 
              : <Result/>
      }
    </div>
  );
}

export default NewForm;