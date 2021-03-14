import React from 'react';
import './Login.css';

const Login = () => {
    const signIn = () => {

    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://i.ibb.co/HKCPnYJ/Screen-Shot-2021-03-14-at-1-42-53-PM.png" alt=""/>
            </div>
            <button onClick={signIn}>
                Sign In
            </button>
        </div>
    )
}

export default Login
