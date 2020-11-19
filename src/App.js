import React from 'react'
import CharactersContainer from './Containers/CharacterContainer.js'
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <CharactersContainer />
      </div>
    );
  }
}


export default App;
