import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DataContextProvider from './Context/DataContextProvider';

ReactDOM.render(
  <DataContextProvider>
    <App />
  </DataContextProvider>,
  document.getElementById('root')
);


