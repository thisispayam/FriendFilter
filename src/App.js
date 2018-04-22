import React, { Component } from 'react';
import './App.css';
import {robots} from './robots';
import CardList from './CardList';
import Searchbox from './Searchbox';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield:''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
  }
  render() {
    const filteredRobots = this.state.robots.filter( robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friend Finder</h1>
          <Searchbox  searchChange={this.onSearchChange}/>
        </header>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
