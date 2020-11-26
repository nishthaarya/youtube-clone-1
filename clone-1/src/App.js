import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import { Trending } from './Components/Trending/Trending';
import { Routes } from './Routes/Routes';



function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
