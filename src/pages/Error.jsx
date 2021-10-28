import React from 'react';
import BackToEvent from '../Components/BackEvent/BackEvent';

function ErrorPage() {
  return(
    <>
      <h1 style={{color:'red', marginBottom: '50px'}}> Opppppss something go wrong</h1>
      <BackToEvent />
    </>
  );
}
export default ErrorPage;