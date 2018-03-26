import React, { Component } from 'react';
import './App.css';
import {robots} from './robots';
import CardList from './CardList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friend Finder</h1>
        </header>
        <CardList robots={robots} />
      </div>
    );
  }
}

export default App;
