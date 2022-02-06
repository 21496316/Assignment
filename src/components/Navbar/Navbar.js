import React from 'react';
import { Menulist } from './Menulist';
import './Navbar.css';
const Navbar = () => {
  const menulist = Menulist.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <a href={url}>{title}</a>
      </li>
    );
  });
  return (
    <nav>
      <div classname="logo">
        VPN <font>Lab</font>
      </div>
      <ul className="menu-list">{menulist}</ul>
    </nav>
  );
};
export default Navbar;
