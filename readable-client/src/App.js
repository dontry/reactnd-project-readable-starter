import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
// import reducer from './reducers';
import { Provider } from 'react-redux';
import Loading from 'react-loading';

// const store = createStore( 
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSIONS__ & window.___REDUX_DEVTOOLS_EXTENSIONS__
// );

class App extends Component {
  state = {
    post: null
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
