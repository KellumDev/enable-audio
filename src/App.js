import logo from './logo.svg';
import './App.css';
import ContentArea from './components/ContentArea/ContentArea'
import React, { useEffect } from 'react';
import { Widget, addResponseMessage  } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

function App() {

  useEffect(() => {
    addResponseMessage('Welcome to this awesome chat!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    let response = "Chat bot response";
    addResponseMessage(response);
  };

  return (
    <div className="App">
      <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <Widget
        handleNewUserMessage={handleNewUserMessage}
      />
      <ContentArea />
    </div>
  );
}

export default App;
