import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" id="quote-box">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          John Flavian is back with react.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
