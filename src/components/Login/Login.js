import React from 'react';
import { Button } from '@material-ui/core';

import './Login.css';
import logo from '../../Geemail.png';
import { auth, provider } from '../../firebase/firebase';
import { login } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_container">
        <img src={logo} alt="Geemail" />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
