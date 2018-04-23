import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';

class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield:''
    }
  }

//from the react lifecycle methods which always runs after constructor
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    return response.json();
  })
  .then(users => {
    this.setState({robots:users})
  })

}
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
  }
  render() {
    const filteredRobots = this.state.robots.filter( robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
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
