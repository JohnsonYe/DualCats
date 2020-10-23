import React, {useEffect, useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserInfo from "./userInfo";
import '../../css/header.css';

const Header = ({isSignIn,showSignIn,toggleFriendList}) => {
  return (
    <header className="bgColor-main">
      <div><Link to={'/'} className="logo display-inline-block nav-link fontColor-main"><h1>Dualcats</h1></Link></div>
      <nav className="height-full">
        <NavLink exact to={'/'} className="nav-link fontColor-main" activeClassName="active"><i className="fa fa-home"></i></NavLink>
        <NavLink exact to={'/community'} className="nav-link fontColor-main"><i className="fa fa-comments"></i></NavLink>
        <NavLink exact to={'/catsGallery'} className="nav-link fontColor-main" activeClassName="active"><i className="fa fa-image"></i></NavLink>
        <hr />
      </nav>
      <UserInfo isSignIn={isSignIn} showSignIn={showSignIn} toggleFriendList={toggleFriendList}/>
    </header>
  )
}

export default Header;