import React, { Component } from 'react';
import './../../css/home.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {redirect : null};
    this.changeToCatsGallery = this.changeToCatsGallery.bind(this);
  }

  changeToCatsGallery() {
    this.setState({redirect: '/catsGallery'});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (
        <div className="hompage-section">
            <a className="cats-gallery-button" onClick={this.changeToCatsGallery}>
              <svg width="280" height="70">
                <defs>
                  <linearGradient id="grad1">
                      <stop offset="0%" stopColor="#F2A65A"/>
                      <stop offset="100%" stopColor="#772F1A" />
                  </linearGradient>
                </defs>
                <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="265" height="52"></rect>
              </svg>
              <span>Cats Gallery</span>
            </a>
        </div>

    );
  }
}

export default Home;