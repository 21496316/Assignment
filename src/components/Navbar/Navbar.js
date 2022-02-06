import React from 'react';
import { Menulist } from './Menulist';
const Navbar = () => {
  const menulist = Menulist.map(({url,title},index) => {
    return(
      <li key={index}>
        <a href={url}>{title}</a>
      </li>
    )
  });
  return(
    <nav>
      <div Classname='logo'>
        VPN <font>Lab</font>
      </div>
      <ul className="menu-list">{menulist}</ul>
    </nav>
  );
};
export default Navbar;
