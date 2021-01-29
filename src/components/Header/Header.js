import { Avatar, IconButton } from '@material-ui/core';
import {
  Apps,
  ArrowDropDown,
  Menu,
  Notifications,
  Search,
} from '@material-ui/icons';
import React from 'react';

import './Header.css';
import logo from '../../zmail.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <Menu />
        </IconButton>
        <img src={logo} alt="Zmail" />
      </div>
      <div className="header_middle">
        <Search />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDown className="header_inputCaret" />
      </div>
      <div className="header_right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
