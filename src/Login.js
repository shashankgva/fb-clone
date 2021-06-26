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
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fundersavedandoverweight.com%2F2018%2F08%2F22%2Fthe-long-road-part-1%2F&psig=AOvVaw1I6uGfLuD7mURJXDLNH7xK&ust=1624778306576000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCKCf1IDhtPECFQAAAAAdAAAAABAI"
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
