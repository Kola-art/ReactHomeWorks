import React from 'react';
import './App.css';
import NewForm from './Components/NewForm';
import Switcher from './Components/Mode/Switch';
import { TaskContext } from './Context/taskContext';
function App() {
  const [ state ] = React.useContext(TaskContext);
  let thema = state.mode ? 'light' : 'dark';  
  return (
    <div className={thema}>
      <Switcher />
      <NewForm />
    </div>
  );
}

export default App;
