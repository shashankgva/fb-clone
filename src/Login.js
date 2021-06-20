import React from 'react';
import Button from '@material-ui/core/Button';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import './Login.css';

function Login() {
  const [state, dispatch] = useStateValue();

  const signinHandler = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      )
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Akash_rajoriya_Facebook_.png"
          alt=""
        />
        <img
          src="https://www.freeiconspng.com/uploads/facebook-simple-text-22.png"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signinHandler}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
