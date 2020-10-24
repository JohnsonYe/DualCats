/** Dependencies */
import React, {Component} from 'react';
import cookie from "./components/classes/cookie.js";
import { NullUser, ClientUser } from "./components/classes/user.js";
import Oauth from "./components/classes/oauth";
import './css/default.css';
import Header from './components/component/header.js';
import FriendList from './components/component/friendList.js';
import { connect } from 'react-redux';

// Rounter
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

// link
import Home from './components/pages/home';
import Community from './components/pages/community';
// import AboutMe from './components/pages/aboutMe';
// import Contact from './components/pages/contact';
import CatsGallery from './components/pages/catsGallery';
import UserModal from './components/pages/login';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      currentUser: new NullUser(),
      showFriendList: false
    };
    
    // redux props
    this.currentUser = this.props.currentUser;
    this.setCurrentUser = this.props.setCurrentUser;

    // App methods
    this.showLoginModal = this.showLoginModal.bind(this);
    this.hideLoginModal = this.hideLoginModal.bind(this);
    this.toggleFriendList = this.toggleFriendList.bind(this);
    
  }

  toggleFriendList(){
    this.setState(this.setState({showFriendList:!this.state.showFriendList}));
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
    if (cookie.get("refresh_token") && !this.currentUser.hasAccess()) {
      const oauth = new Oauth();
      var props = this.props;
      oauth.refreshToken(cookie.get("refresh_token")).then((response)=>{
        cookie.set("refresh_token", response.refresh_token, process.env.REFRESH_TOKEN_EXPIRE_TIME);
        props.setCurrentUser(response.username, response.email, response.token);
      });
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
            <Header showSignIn={this.showLoginModal} currentUser={this.props.currentUser} toggleFriendList={this.toggleFriendList}/>
            <FriendList isSignIn={this.props.currentUser.isSignIn} showFriendList={this.state.showFriendList}/>
            <UserModal show={this.state.showModal} handleClose={this.hideLoginModal}/>

          <Switch>
            <Route exact path='/' component={Home}/>
            {/* <Route path='/aboutme' component={AboutMe} /> */}
            <Route path='/community' component={Community}/>
            {/* <Route path='/contact' component={Contact} /> */}
            <Route path='/catsGallery' component={CatsGallery}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

// export default App;

function mapStateToProp(state) {
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchTotProp(dispatch) {
    return {
        setCurrentUser: (username, email, access_token) => {
            dispatch({
                type: 'USERS_LOGIN',
                payload: {
                    username: username,
                    email: email,
                    access_token: access_token
                }
            })
        }
    }
}

export default connect(mapStateToProp, mapDispatchTotProp)(App)