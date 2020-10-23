import React, {useState} from 'react';
import "../../css/friendList.css";
import Friend from './friend.js';

const FriendList = ({isSignIn,showFriendList}) => {
  var fds =  ['Derek','Johnson','Brian','Simon','Vincent'].map((ele,i)=>{
    return <Friend key={i} name={ele}/>
  });
  return (
    <div className={`friend-list-container bgColor-main ${showFriendList?"show":""}`}>
      <input type='text' id='friend-list-search' placeholder='Search'/>
      <ul className="friend-list">
        {fds}
      </ul>
    </div>
  )
}

export default FriendList;