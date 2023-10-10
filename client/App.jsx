import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthContainer from './containers/AuthContainer.jsx';
import HomeContainer from './containers/HomeContainer.jsx';
import ProfileContainer from './containers/ProfileContainer.jsx';


export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/auth' element={<AuthContainer />} />
        <Route path='/' element={<HomeContainer />} />
      </Routes>
    </div>
  );
}
