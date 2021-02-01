import { Avatar, IconButton } from '@material-ui/core';
import {
  Apps,
  ArrowDropDown,
  Menu,
  Notifications,
  Search,
} from '@material-ui/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Header.css';
import logo from '../../Geemail.png';
import { logout, selectUser } from '../../redux/userSlice';
import { auth } from '../../firebase/firebase';

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

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
        <Avatar src={user?.photoUrl} onClick={signOut} />
      </div>
    </div>
  );
};

export default Header;
