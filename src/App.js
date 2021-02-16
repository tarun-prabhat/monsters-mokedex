import React,{Component} from 'react';
import {CardList} from './Component/card-list/card-list';
import {SearchBox} from './Component/search-box/search-box';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      monsters:[],
      searchField:''
    }

  }
  handleChange = (e) =>{
    this.setState({searchField:e.target.value})
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=> this.setState({monsters:users}));
  }
  render(){
    const {monsters,searchField }= this.state;
    const fileteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Mokedex</h1>
        <SearchBox
        placeholder='search monsters'
        handleChange = {this.handleChange}
        />
        <CardList monsters={fileteredMonsters}/>
      </div>
    );
  }
}

export default App;
