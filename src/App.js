import React, { Component } from 'react';
import CardList from './components/card-list';
import SearchBox from './components/searchBox'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({
        monsters: users
      }))
  }

  handleSearch = (event) => {
    this.setState({
      searchField: event.target.value
    })
  }

  render() {    
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      console.log('monster.name: ', monster.name)
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return (
      <div className="App">
        <h1>Monsters rolodex</h1>
        <SearchBox handleChange={this.handleSearch} placeholder='Search Monsters'/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
