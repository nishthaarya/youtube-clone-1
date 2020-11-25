import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import DataContextProvider from './Context/DataContextProvider';

ReactDOM.render(
  <BrowserRouter>
  <DataContextProvider>
    <App />
  </DataContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);


