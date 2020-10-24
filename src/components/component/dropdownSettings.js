import React from 'react';
import GlobalStore from '../../GlobalStore';
import { Link } from 'react-router-dom';

export default function SettingsDropdown ({show}){
  const { setCurrentUserLogout } = GlobalStore();

  function handleLogout () {
    document.cookie = "refresh_token"+'=; Max-Age=-99999999;';
    setCurrentUserLogout();
  }

  return(
    <ul className={`header-dropdown bgColor-main ${show?"display-block":"display-none"}`}>
      <li>
        <Link className="fontColor-Main btn-hoverBgColor cursor-pointer" style={{ color: '#D2B48C' }} onClick={() => handleLogout()} to={"/"}>
          <span>Logout</span>
        </Link>
      </li>
    </ul>
  )
}
