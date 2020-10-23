import React from 'react';

export default function Friend (props){
  return(
    <li>
      <img src='/src/images/ucsd_triton.png' className="friend-icon" />
      <span className="friend-name">{props.name}</span>
    </li>
  )
}