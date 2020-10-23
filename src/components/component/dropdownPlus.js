import React from 'react';

export default function PlusDropdown ({show}){
  return(
    <ul className={`header-dropdown bgColor-main ${show?"display-block":"display-none"}`}>
      <li className="list-title"><h2>Create</h2></li>
      <li className="list-divider"><hr className="width-full height-none bgColor-divider" /></li>
      <li><a className="fontColor-Main btn-hoverBgColor cursor-pointer">Post</a></li>
      <li><a className="fontColor-Main btn-hoverBgColor cursor-pointer">Thread</a></li>
    </ul>
  )
}
