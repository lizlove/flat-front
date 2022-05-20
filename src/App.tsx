import React from 'react';
import logo from './logo.svg';
import { Catalogs } from './features/catalogs/Catalogs';
import Header from './features/header/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <header className="App-header">
        <h1 className="text-3xl font-bold text-indigo-500 underline">
          Hello world! 
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Catalogs />
    </div>
  );
}

export default App;
