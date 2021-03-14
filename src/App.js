import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import { auth } from './firebase';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth
      .onAuthStateChanged((authUser) => {
        if (authUser) {
          dispatch(login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          }))
        } else {
          dispatch(logout());
        };
      })
  }, [dispatch])

  return (
    <div className="app">
        {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
        ) : (
          <Login />
        )}
      </div>
  );
}

export default App;
