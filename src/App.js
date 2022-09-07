import './App.css';
import { Component } from 'react';
import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monster: users }))
  }
  render() {
    // const monsters = this.state.monster;
    // const searchField = this.state.searchField;
    const { monster, searchField } = this.state;
    const filteredMonsters = monster.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className='App'>
        <h1 className='heading'>Monster Robots</h1>
        <SearchBox placeholder='search Robots' handleChanger={(e) => this.setState({ searchField: e.target.value })} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }

  // static getDerivedStateFromProps() {
  //   console.log("getDerivedStateFromProps");
  // }

  // getSnapshotBeforeUpdate() {
  //   console.log("getSnapshotBeforeUpdate");
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate()");
  // }

  // shouldComponentUpdate() {
  //   console.log("shouldComponentUpdate()");
  //   return false
  // }

  // render() {
  //   console.log("render");
  //   return (
  //     <div className='App'>

  //       <button onClick={() => {
  //         this.setState({ clicked: !this.state.clicked })
  //       }}>click me</button>
  //       <br />
  //       <span>{this.state.clicked ? "hari" : "gokul"}</span>

  //       {/* <cardList name="yiuva">
  //         {

  //         }
  //       </cardList> */}
  //     </div>
  //   )
  // }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



export default App;
