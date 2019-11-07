import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyInfo from './components/MyInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyInfo/>
      </header>
    </div>
  );
}

export default App;
