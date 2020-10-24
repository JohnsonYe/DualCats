import React, {useState,useEffect,useRef} from 'react';
import "../../css/userInfo.css";
import PlusDropdown from './dropdownPlus.js';
import FriendsDropdown from './dropdownFriends.js';
import SettingsDropdown from './dropdownSettings.js';

const UserInfo = ({currentUser, showSignIn, toggleFriendList}) => {
  const[dropdownShow,setShow] = useState(false);
  const[dropdownActive, setActive] = useState(0);
  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);
  const dropdownRef3 = useRef(null);

  function showDropdown(active) {
    if(active===0){
      setShow(false);
      setActive(0);
    } else if(dropdownActive !== active){
      setShow(true);
      setActive(active);
    } else {
      setShow(!dropdownShow);
      setActive(0);
    }
  }

  function handleClickOutside(event){
    if((dropdownRef1.current && !dropdownRef1.current.contains(event.target)) &&
       (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) &&
       (dropdownRef3.current && !dropdownRef3.current.contains(event.target))){
          showDropdown(0);  
       }
  }

  useEffect(()=>{
    document.addEventListener("click",handleClickOutside);
    return(
      ()=>document.removeEventListener("click",handleClickOutside)
    );
  });
  
  if(!currentUser.isSignIn){
    return(
      <div className="sign-in-section">
        {/* <a className="btn-sign-in fontColor-main cursor-pointer" onClick={()=>{setLogin(true)}}><i className="fa fa-sign-in"></i>Sign In</a> */}
        <a className="btn-sign-in fontColor-main cursor-pointer" onClick={()=>{showSignIn()}}><i className="fa fa-sign-in"></i>Sign In</a>
      </div>
    );
  } else {
    return(
      <div className="sign-in-section">
        <div className="profile btn-hoverBgColor cursor-pointer">
          <img className="profile-img" src="https://img.pngio.com/user-profile-default-image-png-clipart-1578186-pinclipart-user-profile-png-880_769.png"></img>
          <span className="profile-name fontColor-main">{currentUser.username}</span>
        </div>
        <div ref={dropdownRef1}>
          <button onClick={()=>showDropdown(1)} className="btn-hoverBgColor btn-focusBgColor fontColor-main"><i className="fa fa-plus"></i></button>
          <PlusDropdown show={dropdownShow && (dropdownActive===1)} />
        </div>
        <div ref={dropdownRef2}>
          <button onClick={()=>showDropdown(2)} className="btn-hoverBgColor btn-focusBgColor fontColor-main"><i className="fa fa-users"></i></button>
          <FriendsDropdown show={dropdownShow && (dropdownActive===2)} toggleFriendList={toggleFriendList} />
        </div>
        <div ref={dropdownRef3}>
          <button onClick={()=>showDropdown(3)} className="btn-hoverBgColor btn-focusBgColor fontColor-main"><i className="fa fa-cog"></i></button>
          <SettingsDropdown show={dropdownShow && (dropdownActive===3)} />
        </div>
      </div>
    )
  }
}

export default UserInfo;