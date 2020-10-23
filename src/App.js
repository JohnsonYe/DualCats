/** Dependencies */
import React, {Component} from 'react';
import cookie from "./components/classes/cookie.js";
import { NullUser, ClientUser } from "./components/classes/user.js";
import Oauth from "./components/classes/oauth";
import './css/default.css';
import Header from './components/component/header.js';
import FriendList from './components/component/friendList.js';

// Rounter
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

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
      showModal: false,
      redirect: false,
      currentUser: new NullUser(),
      showFriendList: false
    };

    this.showLoginModal = this.showLoginModal.bind(this);
    this.hideLoginModal = this.hideLoginModal.bind(this);
    this.handleSignIn   = this.handleSignIn.bind(this);
    this.handleLogout   = this.handleLogout.bind(this);
    this.toggleFriendList = this.toggleFriendList.bind(this);
  }

  toggleFriendList(){
    this.setState(this.setState({showFriendList:!this.state.showFriendList}));
  }

  /**
   * 
   * @param {Object} {username: string, email: string, access_token: string}
   * @description create a client user, the state changes to signed in User
   */
  handleSignIn ({ username, email, access_token}) {
    this.setState({currentUser: new ClientUser({
        username: username,
        email: email,
        access_token: access_token
      }),
      isSignIn: true
    });
  }

  /**
   * @description clear refresh token from cookies, current user state change to null
   */
  handleLogout () {
    document.cookie = "refresh_token"+'=; Max-Age=-99999999;';
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

  /**
   * check user cookies and user access
   * request a new token everytime for newpage
   */
  componentDidMount() {
    if (cookie.get("refresh_token") && !this.state.currentUser.hasAccess()) {
      const oauth = new Oauth();
      oauth.refreshToken(cookie.get("refresh_token")).then((response)=>{
        cookie.set("refresh_token", response.refresh_token, process.env.REFRESH_TOKEN_EXPIRE_TIME);
        this.handleSignIn({ username: response.username, email: response.email, access_token: response.token });
      });
    }

    /** @TODO
     * Logout user once the cookie expire
     */
  }


  render() {
    /**
     * This section handle sign in state
     * after oauth finished in backend
     * i will change the part have capable to sign in
     */
    if (this.state.isSignIn) { 
      var signInSection = (
          <>
            <a>
              <i className="fa fa-user" aria-hidden="true">Welcome {this.state.currentUser.username}</i>
            </a>
            
            <ul className="user-dropdown-menu">
              <li className="dropdown-item-1"><i className="fa fa-user" aria-hidden="true">Profile</i></li>
              <li className="dropdown-item-2"><i className="fa fa-cogs" aria-hidden="true">Setting</i></li>
              <li className="dropdown-item-3"><a onClick={this.handleLogout}><i className="fa fa-sign-out" aria-hidden="true">Sign Out</i></a></li>
            </ul>
          </>
      );
    } else {
      var signInSection = (<a onClick={this.showLoginModal}><i className="fa fa-sign-in" aria-hidden="true">Sign in</i></a>);
    }

    return (
      <Router>
        <div className="App">
            <Header isSignIn={this.state.isSignIn} showSignIn={this.showLoginModal} toggleFriendList={this.toggleFriendList}/>
            <FriendList isSignIn={this.state.isSignIn} showFriendList={this.state.showFriendList}/>
            <UserModal show={this.state.showModal} handleClose={this.hideLoginModal} handleSignIn={this.handleSignIn} handleSignIn={this.handleSignIn}/>
          
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/aboutme' component={AboutMe} />
            <Route path='/contact' component={Contact} />
            <Route path='/catsGallery' component={CatsGallery}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;