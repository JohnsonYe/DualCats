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
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = {
      x: 0,
      y: 0
    }
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {  
    return (
      <div className="App">
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

          <div style={{height: '100vh'}} onMouseMove={this.handleMouseMove}>
            <h1>Move the mouse around!</h1>
            <p>The current position is {this.state.x}, {this.state.y}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App;