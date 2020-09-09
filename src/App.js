import React, {Component} from 'react';
import './css/default.css';
// import './sass/app.sass';

// Rounter
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// link
import Home from './components/pages/home';
import AboutMe from './components/pages/aboutMe';
import Contact from './components/pages/contact';
import CatsGallery from './components/pages/catsGallery';
import UserModal from './components/pages/login';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn: false,
      user: "",
      showModal: false,
      redirect: false
      // userMenuOpen: false,
    };

    this.showLoginModal = this.showLoginModal.bind(this);
    this.hideLoginModal = this.hideLoginModal.bind(this);

    this.handleSignIn   = this.handleSignIn.bind(this);
    this.handleLogout   = this.handleLogout.bind(this);

  }

  handleSignIn (username) {
    this.setState({
      isSignIn: !this.state.isSignIn,
      user: username
    });
  }

  handleLogout () {
    this.setState({
      isSignIn: !this.state.isSignIn,
      user: "",
      redirect: true
    });
    window.location.reload(false);
  }

  showLoginModal() {
    this.setState({showModal: true});
  }

  hideLoginModal() {
    this.setState({showModal: false});
  }

  render() {
    let signInSection;
    /**
     * This section handle sign in state
     * after oauth finished in backend
     * i will change the part have capable to sign in
     */
    if (this.state.isSignIn) { 
      signInSection = (
          <>
            <a>
              <i className="fa fa-user" aria-hidden="true">Welcome {this.state.user}</i>
            </a>
            
            <ul className="user-dropdown-menu">
              <li className="dropdown-item-1"><i className="fa fa-user" aria-hidden="true">Profile</i></li>
              <li className="dropdown-item-2"><i className="fa fa-cogs" aria-hidden="true">Setting</i></li>
              <li className="dropdown-item-3"><a onClick={this.handleLogout}><i className="fa fa-sign-out" aria-hidden="true">Sign Out</i></a></li>
            </ul>
          </>
      );
    } else {
      signInSection = (<a onClick={this.showLoginModal}><i className="fa fa-sign-in" aria-hidden="true">Sign in</i></a>);
    }

    return (
      <Router>
        <div className="App">
          {/* <div className="app-header"> */}
            <nav className='navbar'>
              <div><Link to={'/'} className="nav-link nav-logo"><h1>Dualcats</h1></Link></div>
              <ul>
                <li className='navbar-list home'><Link to={'/'} className="nav-link">Home</Link></li>
                {/* <li className='navbar-list contact'><Link to={'/contact'} className="nav-link">Contact</Link></li> */}
                {/* <li className='navbar-list aboutme'><Link to={'/aboutme'} className="nav-link">About Me</Link></li> */}
                <li className='navbar-list catsGallery'><Link to={'/catsGallery'} className="nav-link">Gallery</Link></li>
                {/* <li className='navbar-list myPets'><Link to={'/catsGallery'} className="nav-link">My Pets</Link></li> */}
              </ul>
              <div className="sign-in-section" >
                {signInSection}
              </div>
            </nav>
            <UserModal show={this.state.showModal} handleClose={this.hideLoginModal} handleSignIn={this.handleSignIn}/>
          
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

// const Modal = ({handleClose, show, children}) => {
//   const showHideClassName = show ? "modal display-block" : "modal display-none";

//   return (
//     <div className={showHideClassName}>
//       <section className="modal-main">
//         {children}
//         <button onClick={handleClose}>close</button>
//       </section>
//     </div>
//   );
// }

export default App;