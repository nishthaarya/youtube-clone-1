import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import DataContextProvider from './Context/DataContextProvider';

ReactDOM.render(
  <DataContextProvider>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </DataContextProvider>,
  document.getElementById('root')
);


