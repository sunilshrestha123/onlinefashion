import React from 'react';
import '../assets/css/menu.css';
const MenuItem = props => {
  return (
    <ul class='ul'>
      <li class='li'>
        <a class='a'>{props.menuName}</a>
      </li>
    </ul>
  );
};

export default MenuItem;
