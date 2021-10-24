import React from 'react';
import MainTable from './Components/MainTable/MainTable';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <MainTable />
    </Provider>
  );
}

export default App;
