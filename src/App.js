import React, {Component} from 'react';
import Table from './components/Table';
import Form from './components/Form';
import Header from './components/Header';
import Personal_Info from './components/Personal_Info';
import Skill from './components/Skill';
import './css/default.css';

class App extends Component {
  state = {
    characters: []
  };

  removeCharacter = (index) => {
    const {characters} = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    });
  }

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]});
  };

  render() {  
    return (
      <div className="App">
        {/* <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} /> */}
        <Header />
        <div className="body-container container">
          <Personal_Info />
          <Skill />
        </div>
      </div>
    )
  }
}

export default App;