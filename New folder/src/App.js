import './App.css';
import Header from './components/header'
import Sidebar from './components/sidebar'
import FilesView from './components/filesView/FilesView'
import SideIcons from './components/sideIcons'

import GDriveLogo from './media/logo.png'


import React from 'react'
import { auth, provider } from "./firebase";
import { useState } from 'react';

function App() {
   const [user, setUser] = useState()
  
   const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
      })
    }
  }

  return (
    <div className="app">
      {
        user ? (
          <>
            <Header userPhoto={user.photoURL} />
            <div className="app__main">
              <Sidebar />

              <div class = "vertical"></div>

              <FilesView />
              <SideIcons />
              
            </div>
          </>
        ) : (
            <div className='app__login'>
              <img src={GDriveLogo} alt="Google Drive" />
              <button onClick={handleLogin}>Log in to CBIT Drive</button>
            </div>
          )
      }
    </div>
  );
    }
    
    
    
  



export default App;