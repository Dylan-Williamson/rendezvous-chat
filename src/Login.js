import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import React from 'react';
import './Login.css';

const Login = () => {
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://i.ibb.co/HKCPnYJ/Screen-Shot-2021-03-14-at-1-42-53-PM.png" alt=""/>
            </div>
            <Button onClick={signIn} >
                Sign In
            </Button>
        </div>
    )
}

export default Login;
