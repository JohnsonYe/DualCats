import React, {Component} from 'react';
import Table from './components/Table';
import Form from './components/Form';
import Header from './components/Header';
import Personal_Info from './components/Personal_Info';
import Skill from './components/Skill';
import Education from './components/Education';
import Experience from './components/Experience';
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
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Personal_Info />
              <Experience />
            </div>
            <div className="col-4">
              <Education />
              <Skill />
            </div>
          </div>
          
          
        </div>
      </div>
    )
  }
}

export default App;