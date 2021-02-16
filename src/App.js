import logo from './logo.svg';
import './App.css';
import ContentArea from './components/ContentArea/ContentArea'
import React, { useState, useEffect } from 'react';
 

import 'react-chat-widget/lib/styles.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">

        <p>
          Accessibility Testing
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
      
      <ContentArea  />
    </div>
  );
}

export default App;
