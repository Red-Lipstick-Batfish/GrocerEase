import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthContainer from './containers/AuthContainer';
import HomeContainer from './containers/HomeContainer';
import ProfileContainer from './containers/ProfileContainer';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={ <AuthContainer /> }/>
        <Route path="/profile" element={ <ProfileContainer /> }/>
        <Route path="/home" element={ <HomeContainer />}/>
      </Routes>
    </div>
  );
}