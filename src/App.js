import React, {Component} from 'react';
import './css/default.css';

// Rounter
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
// link
import Home from './components/pages/home';
import AboutMe from './components/pages/aboutMe';
import Contact from './components/pages/contact';
import CatsGallery from './components/pages/catsGallery';

class App extends Component {
  constructor(props) {
    super(props);
    // this.handleMouseMove = this.handleMouseMove.bind(this);
    // this.state = {
    //   x: 0,
    //   y: 0
    // }
  }

  // handleMouseMove(event) {
  //   this.setState({
  //     x: event.clientX,
  //     y: event.clientY
  //   });
  // }

  

  render() {  
    return (
      <Router>
        <div className="App">
          
          <nav className='navbar'>
            <div><Link to={'/'} className="nav-link nav-logo"><h1>Dualcats</h1></Link></div>
            
            <ul>
              <li className='navbar-list home'><Link to={'/'} className="nav-link">Home</Link></li>
              {/* <li className='navbar-list contact'><Link to={'/contact'} className="nav-link">Contact</Link></li> */}
              {/* <li className='navbar-list aboutme'><Link to={'/aboutme'} className="nav-link">About Me</Link></li> */}
              <li className='navbar-list catsGallery'><Link to={'/catsGallery'} className="nav-link">Gallery</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/aboutme' component={AboutMe} />
            <Route path='/contact' component={Contact} />
            <Route path='/catsGallery' component={CatsGallery} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;