import React from 'react';
import './App.css';
import './Components/Header/Header.css'
import Header from './Components/Header/Header.jsx';
import Profile from './Components/Profile/Profile.jsx';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Profile />
    </div>
  );
}

export default App;
