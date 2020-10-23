import React from 'react';

export default function FriendsDropdown ({show,toggleFriendList}){
  return(
    <ul className={`header-dropdown bgColor-main ${show?"display-block":"display-none"}`}>
      <li>
        <label htmlFor="toggle_fd-list" className="fontColor-main">Friend List</label>
        <div className="toggle-wrapper" >
          <input type="checkbox" name="toggle_fd-list" id="toggle_fd-list" onChange={toggleFriendList}/>
          <label className="slider" htmlFor="toggle_fd-list"></label>
        </div>
      </li>
    </ul>
  )
}
