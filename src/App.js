import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Nav from './navigation/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
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

        <a
          className="App-link"
          href="/about"
        >
          About

          
        </a>

        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={Home} />
            <Route path="/topics" component={Home} />
          </Router>  
      </header>
    </div>
  );
}

export default App;
