import React from 'react';

export default function SettingsDropdown ({show}){
  return(
    <ul className={`header-dropdown bgColor-main ${show?"display-block":"display-none"}`}>
      <li><a className="fontColor-Main btn-hoverBgColor cursor-pointer">Logout</a></li>
    </ul>
  )
}
