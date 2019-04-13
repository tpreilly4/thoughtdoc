import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import ThoughtCard from './components/ThoughtCard';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 style={{marginTop: '1rem'}}>Welcome!</h1>
          <Input/>
      </div>
    );
  }
}

export default App;
